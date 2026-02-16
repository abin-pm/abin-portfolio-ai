import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = (await request.json()) as { name?: string; email?: string; message?: string };

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

  return NextResponse.json({
    message:
      'Message received. Connect this endpoint to your email provider (Resend, SES, or Formspree) for production email delivery.'
  });
}
