import { NextResponse } from 'next/server';
import { identity } from '@/lib/data';

type ContactBody = { name?: string; email?: string; message?: string; website?: string };

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

export async function POST(request: Request) {
  let body: ContactBody;
  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json({ message: 'Invalid request.' }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field. Pretend success so bots move on.
  if (body.website) {
    return NextResponse.json({ message: 'Message sent.' });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json({ message: 'Please complete all fields.' }, { status: 400 });
  }

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailValid) {
    return NextResponse.json({ message: 'Please use a valid email address.' }, { status: 400 });
  }

  if (name.length > 200 || email.length > 320 || message.length > 5000) {
    return NextResponse.json({ message: 'Your message is too long. Please shorten it.' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('[contact] RESEND_API_KEY is not set; enquiry not delivered.');
    return NextResponse.json(
      { message: `Sorry, the form is temporarily unavailable. Please email ${identity.email} directly.` },
      { status: 500 },
    );
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      // Resend's shared sender; it only delivers to the Resend account's own address.
      // Switch to e.g. 'Portfolio <contact@abinaiengineer.com>' after verifying the domain in Resend.
      from: process.env.CONTACT_FROM_EMAIL ?? 'Portfolio <onboarding@resend.dev>',
      to: [identity.email],
      reply_to: email,
      subject: `Portfolio enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${escapeHtml(name)}<br><strong>Email:</strong> ${escapeHtml(email)}</p><p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
    }),
  });

  if (!res.ok) {
    console.error('[contact] Resend error', res.status, await res.text());
    return NextResponse.json(
      { message: `Sorry, your message couldn't be sent. Please email ${identity.email} directly.` },
      { status: 502 },
    );
  }

  return NextResponse.json({ message: 'Message sent.' });
}
