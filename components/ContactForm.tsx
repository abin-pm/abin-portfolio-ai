'use client';

import { FormEvent, useState } from 'react';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = data.get('name')?.toString().trim();
    const email = data.get('email')?.toString().trim();
    const message = data.get('message')?.toString().trim();

    const body = encodeURIComponent(
      `Hi Abin,%0D%0A%0D%0AName: ${name ?? ''}%0D%0AEmail: ${email ?? ''}%0D%0A%0D%0A${message ?? ''}`
    );

    window.location.href = `mailto:abinpm@gmail.com?subject=Portfolio%20Inquiry&body=${body}`;
    setSubmitted(true);
    form.reset();
  };

  return (
    <form className="space-y-4 rounded-xl border border-white/10 bg-vscode-surface/70 p-5" onSubmit={handleSubmit}>
      <label className="block text-sm">
        <span className="mb-1 block text-vscode-text/80">Name</span>
        <input
          name="name"
          required
          className="w-full rounded-md border border-white/10 bg-vscode-bg px-3 py-2 text-vscode-text outline-none ring-vscode-blue focus:ring"
        />
      </label>
      <label className="block text-sm">
        <span className="mb-1 block text-vscode-text/80">Email</span>
        <input
          type="email"
          name="email"
          required
          className="w-full rounded-md border border-white/10 bg-vscode-bg px-3 py-2 text-vscode-text outline-none ring-vscode-blue focus:ring"
        />
      </label>
      <label className="block text-sm">
        <span className="mb-1 block text-vscode-text/80">Message</span>
        <textarea
          name="message"
          required
          rows={4}
          className="w-full rounded-md border border-white/10 bg-vscode-bg px-3 py-2 text-vscode-text outline-none ring-vscode-blue focus:ring"
        />
      </label>
      <button
        type="submit"
        className="rounded-md bg-vscode-blue px-4 py-2 text-sm font-medium text-vscode-bg transition hover:brightness-110"
      >
        Send message
      </button>
      {submitted ? <p className="text-xs text-vscode-green">Thanks! Your default email client should open now.</p> : null}
    </form>
  );
}
