export type BookingPayload = {
  pickup: string;
  dropoff: string;
  date: string;
  time: string;
  vehicleType: string;
  passengers: string;
};

export type BookingResult =
  | { ok: true; mode: 'submitted' | 'local-only' }
  | { ok: false; error: string };

const ENDPOINT = import.meta.env.VITE_BOOKING_ENDPOINT as string | undefined;

export async function submitBooking(data: BookingPayload): Promise<BookingResult> {
  // No endpoint configured: log + succeed locally so dev keeps working.
  if (!ENDPOINT) {
    console.warn('[shayze] VITE_BOOKING_ENDPOINT not set — booking captured locally only.', data);
    return { ok: true, mode: 'local-only' };
  }

  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        ...data,
        _subject: `New Shayze reservation: ${data.pickup || 'unknown'} → ${data.dropoff || 'unknown'}`,
      }),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => '');
      return { ok: false, error: `Booking failed (${res.status}). ${text.slice(0, 120)}` };
    }
    return { ok: true, mode: 'submitted' };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : 'Network error' };
  }
}
