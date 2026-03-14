'use client';

import { useState, useId } from 'react';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm() {
  const id = useId();
  const [state, setState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const validate = (name: string, email: string, message: string) => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = 'Please enter your name.';
    if (!email.trim()) errs.email = 'Please enter your email address.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = 'Please use a valid email address.';
    if (!message.trim()) errs.message = 'Please briefly describe your project or need.';
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name    = (form.elements.namedItem('name')    as HTMLInputElement).value;
    const email   = (form.elements.namedItem('email')   as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

    const errs = validate(name, email, message);
    if (Object.keys(errs).length) { setFieldErrors(errs); return; }
    setFieldErrors({});
    setState('submitting');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) {
        const data = (await res.json()) as { message?: string };
        throw new Error(data.message ?? 'Something went wrong.');
      }
      setState('success');
      form.reset();
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      setState('error');
    }
  };

  const inputBase =
    'w-full rounded-xl border bg-[rgba(99,102,241,0.04)] px-4 py-3 font-sans text-sm text-[#f1f5f9] placeholder-[#475569] outline-none transition focus:ring-2 focus:ring-[rgba(99,102,241,0.5)]';
  const inputNormal = `${inputBase} border-[rgba(99,102,241,0.18)] focus:border-[rgba(99,102,241,0.45)]`;
  const inputError  = `${inputBase} border-[rgba(239,68,68,0.5)] focus:ring-[rgba(239,68,68,0.3)]`;

  if (state === 'success') {
    return (
      <div
        role="alert"
        className="card rounded-xl p-8 text-center"
      >
        <div className="relative z-10">
          <div className="mb-3 text-3xl">✅</div>
          <p className="font-sans text-lg font-semibold text-[#f1f5f9]">Message received.</p>
          <p className="mt-2 text-sm text-[#94a3b8]">
            Expect a reply within 24 hours. You can also reach Abin directly at{' '}
            <a href="mailto:abinpm92@gmail.com" className="text-[#6366f1] hover:underline">
              abinpm92@gmail.com
            </a>
            .
          </p>
          <button
            onClick={() => setState('idle')}
            className="mt-6 rounded-lg border border-[rgba(99,102,241,0.3)] px-5 py-2 font-mono text-xs text-[#6366f1] transition hover:border-[rgba(99,102,241,0.6)]"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Contact form"
      className="flex flex-col gap-4"
    >
      {/* Name */}
      <div>
        <label
          htmlFor={`${id}-name`}
          className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-[#475569]"
        >
          Your name
        </label>
        <input
          id={`${id}-name`}
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Jane Smith"
          aria-describedby={fieldErrors.name ? `${id}-name-error` : undefined}
          aria-invalid={!!fieldErrors.name}
          className={fieldErrors.name ? inputError : inputNormal}
        />
        {fieldErrors.name && (
          <p id={`${id}-name-error`} role="alert" className="mt-1 font-mono text-[10px] text-red-400">
            {fieldErrors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor={`${id}-email`}
          className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-[#475569]"
        >
          Work email
        </label>
        <input
          id={`${id}-email`}
          name="email"
          type="email"
          autoComplete="email"
          placeholder="jane@company.com"
          aria-describedby={fieldErrors.email ? `${id}-email-error` : undefined}
          aria-invalid={!!fieldErrors.email}
          className={fieldErrors.email ? inputError : inputNormal}
        />
        {fieldErrors.email && (
          <p id={`${id}-email-error`} role="alert" className="mt-1 font-mono text-[10px] text-red-400">
            {fieldErrors.email}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor={`${id}-message`}
          className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-[#475569]"
        >
          Project or enquiry
        </label>
        <textarea
          id={`${id}-message`}
          name="message"
          rows={4}
          placeholder="Brief description of your project, role, or question…"
          aria-describedby={fieldErrors.message ? `${id}-message-error` : undefined}
          aria-invalid={!!fieldErrors.message}
          className={`resize-none ${fieldErrors.message ? inputError : inputNormal}`}
        />
        {fieldErrors.message && (
          <p id={`${id}-message-error`} role="alert" className="mt-1 font-mono text-[10px] text-red-400">
            {fieldErrors.message}
          </p>
        )}
      </div>

      {/* API error */}
      {state === 'error' && (
        <p role="alert" className="rounded-lg border border-[rgba(239,68,68,0.3)] bg-[rgba(239,68,68,0.05)] px-4 py-3 font-mono text-xs text-red-400">
          {errorMsg}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={state === 'submitting'}
        className="mt-1 flex w-full items-center justify-center gap-2 rounded-xl bg-[#6366f1] px-6 py-3.5 font-sans font-semibold text-white shadow-[0_0_30px_rgba(99,102,241,0.25)] transition hover:opacity-90 hover:shadow-[0_0_45px_rgba(99,102,241,0.4)] disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6366f1]"
        aria-label={state === 'submitting' ? 'Sending your message…' : 'Send message to Abin PM'}
      >
        {state === 'submitting' ? (
          <>
            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden>
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
            </svg>
            Sending…
          </>
        ) : (
          'Send Message'
        )}
      </button>

      <p className="text-center font-mono text-[10px] text-[#475569]">
        Contact details are used only to respond to this enquiry.
      </p>
    </form>
  );
}
