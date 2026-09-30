'use client';

import { useState } from 'react';

type Props = {
  title: string;
  slug: string;
};

export function ShareButtons({ title, slug }: Props) {
  const [copied, setCopied] = useState(false);

  const url = `https://www.abinaiengineer.com/blog/${slug}`;
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
      <span className="text-xs text-subtle">Share:</span>
      <a
        href={twitterHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X (Twitter)"
        className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-surface text-xs text-muted no-underline transition hover:border-sage hover:text-sage-dark"
      >
        𝕏
      </a>
      <a
        href={linkedinHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className="flex h-8 items-center justify-center rounded-lg border border-border bg-surface px-3 text-xs text-muted no-underline transition hover:border-sage hover:text-sage-dark"
      >
        in
      </a>
      <button
        onClick={handleCopy}
        aria-label="Copy link"
        className="flex h-8 items-center justify-center rounded-lg border border-border bg-surface px-3 text-xs text-muted transition hover:border-sage hover:text-sage-dark"
      >
        {copied ? '✓ Copied' : 'Copy link'}
      </button>
    </div>
  );
}
