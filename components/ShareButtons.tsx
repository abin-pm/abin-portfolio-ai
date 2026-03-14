'use client';

import { useState } from 'react';

type Props = {
  title: string;
  slug: string;
};

export function ShareButtons({ title, slug }: Props) {
  const [copied, setCopied] = useState(false);

  const url = `https://abinaiengineer.com/blog/${slug}`;
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const twitterHref = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
  const linkedinHref = `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`;

  function handleCopy() {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-xs text-[#475569]">Share:</span>
      <a
        href={twitterHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X (Twitter)"
        className="flex h-8 w-8 items-center justify-center rounded-lg border border-[rgba(99,102,241,0.15)] bg-[rgba(99,102,241,0.04)] font-mono text-xs text-[#94a3b8] no-underline transition hover:border-[rgba(99,102,241,0.4)] hover:text-[#6366f1]"
      >
        𝕏
      </a>
      <a
        href={linkedinHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className="flex h-8 items-center justify-center rounded-lg border border-[rgba(99,102,241,0.15)] bg-[rgba(99,102,241,0.04)] px-3 font-mono text-xs text-[#94a3b8] no-underline transition hover:border-[rgba(99,102,241,0.4)] hover:text-[#6366f1]"
      >
        in
      </a>
      <button
        onClick={handleCopy}
        aria-label="Copy link"
        className="flex h-8 items-center justify-center rounded-lg border border-[rgba(99,102,241,0.15)] bg-[rgba(99,102,241,0.04)] px-3 font-mono text-xs text-[#94a3b8] transition hover:border-[rgba(99,102,241,0.4)] hover:text-[#6366f1]"
      >
        {copied ? '✓ Copied' : 'Copy link'}
      </button>
    </div>
  );
}
