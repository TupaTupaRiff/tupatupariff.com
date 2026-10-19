/*
# Create booking_requests table for class trial requests

1. New Tables
- `booking_requests`
  - `id` (uuid, primary key)
  - `name` (text, not null) — full name of the student or contact person
  - `email` (text, not null) — contact email
  - `phone` (text, not null) — contact phone number
  - `instrument` (text, not null) — instrument of interest (Guitarra, Bajo, Batería, Ukelele, Combo, Sala de Ensayo)
  - `level` (text) — current skill level
  - `preferred_shift` (text) — preferred time slot
  - `comments` (text) — optional message about favorite artists/bands
  - `status` (text, default 'pending') — request status for admin tracking
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `booking_requests`.
- This is a no-auth public website: anyone can submit a booking request.
- Allow anon + authenticated INSERT only (public can submit but not read/modify).
- No SELECT/UPDATE/DELETE for anon — only inserts are public.
*/

CREATE TABLE IF NOT EXISTS booking_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  instrument text NOT NULL,
  level text,
  preferred_shift text,
  comments text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE booking_requests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_booking_requests" ON booking_requests;
CREATE POLICY "anon_insert_booking_requests"
ON booking_requests FOR INSERT
TO anon, authenticated
WITH CHECK (true);
