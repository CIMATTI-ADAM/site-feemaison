/*
# Create contact submissions and email queue tables

1. New Tables
- `contact_submissions`: stores all contact form submissions from the Fée Maison website
  - id (uuid, primary key)
  - nom (text, not null)
  - prenom (text, nullable)
  - telephone (text, not null)
  - email (text, not null)
  - type_demande (text, not null) — "Batchcooking" or "Évènementiel"
  - sous_type (text, nullable) — "Ponctuel" or "Sur plusieurs jours"
  - date_souhaitee (text, not null)
  - nombre_personnes (integer, not null)
  - lieu (text, not null)
  - message (text, nullable)
  - recipient_email (text, not null)
  - status (text, default 'new')
  - created_at (timestamptz, default now())
- `email_queue`: stores emails to be sent via an email service (Resend, etc.)
  - id (uuid, primary key)
  - to_email (text, not null)
  - subject (text, not null)
  - body (text, not null)
  - status (text, default 'pending')
  - created_at (timestamptz, default now())
  - sent_at (timestamptz, nullable)

2. Security
- Enable RLS on both tables.
- Allow anon + authenticated INSERT only (public can submit forms, cannot read).
- No SELECT/UPDATE/DELETE for anon — only the service role (edge function) can read.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nom text NOT NULL,
  prenom text,
  telephone text NOT NULL,
  email text NOT NULL,
  type_demande text NOT NULL,
  sous_type text,
  date_souhaitee text NOT NULL,
  nombre_personnes integer NOT NULL,
  lieu text NOT NULL,
  message text,
  recipient_email text NOT NULL,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact" ON contact_submissions;
CREATE POLICY "anon_insert_contact"
ON contact_submissions FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE TABLE IF NOT EXISTS email_queue (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  to_email text NOT NULL,
  subject text NOT NULL,
  body text NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  sent_at timestamptz
);

ALTER TABLE email_queue ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_email_queue" ON email_queue;
CREATE POLICY "anon_insert_email_queue"
ON email_queue FOR INSERT
TO anon, authenticated
WITH CHECK (true);
