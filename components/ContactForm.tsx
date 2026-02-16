'use client';

import { FormEvent, useState } from 'react';

type FormState = {
  status: 'idle' | 'loading' | 'success' | 'error';
  message: string;
};

const initialState: FormState = {
  status: 'idle',
  message: ''
};

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>(initialState);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: data.get('name')?.toString().trim() ?? '',
      email: data.get('email')?.toString().trim() ?? '',
      message: data.get('message')?.toString().trim() ?? ''
    };

    setFormState({ status: 'loading', message: 'Sending your message...' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const json = (await response.json()) as { message: string };

      if (!response.ok) {
        setFormState({ status: 'error', message: json.message || 'Something went wrong. Please try again.' });
        return;
      }

      setFormState({ status: 'success', message: json.message });
      form.reset();
    } catch {
      setFormState({ status: 'error', message: 'Unable to send right now. Please email directly at abinpm@gmail.com.' });
    }
  };

  return (
    <form
      className="space-y-4 rounded-xl border border-white/10 bg-vscode-surface/70 p-5"
      onSubmit={handleSubmit}
      aria-label="Contact form"
    >
      <label className="block text-sm">
        <span className="mb-1 block text-vscode-text/80">Name</span>
        <input
          name="name"
          required
          autoComplete="name"
          className="w-full rounded-md border border-white/10 bg-vscode-bg px-3 py-2 text-vscode-text outline-none ring-vscode-blue focus:ring"
        />
      </label>
      <label className="block text-sm">
        <span className="mb-1 block text-vscode-text/80">Email</span>
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
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
        disabled={formState.status === 'loading'}
        className="rounded-md bg-vscode-blue px-4 py-2 text-sm font-medium text-vscode-bg transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {formState.status === 'loading' ? 'Sending...' : 'Send message'}
      </button>
      {formState.status !== 'idle' ? (
        <p
          className={`text-xs ${formState.status === 'success' ? 'text-vscode-green' : formState.status === 'error' ? 'text-red-400' : 'text-vscode-text/70'}`}
          role="status"
        >
          {formState.message}
        </p>
      ) : null}
    </form>
  );
}
