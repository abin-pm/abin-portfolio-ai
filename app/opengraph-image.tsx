import { ImageResponse } from 'next/og';
import { identity } from '@/lib/data';

// Social share card (LinkedIn, WhatsApp, Slack, X). As a file-based metadata route it
// applies to every page and overrides any `openGraph.images` set in page metadata.
export const alt = `${identity.name} – Senior Full Stack & AI Developer`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const COLORS = { cream: '#f7f6f3', ink: '#1c1c19', muted: '#6b6a63', sage: '#6f7f63', sageLight: '#e7ebe0', border: '#d3cfc2' };

// Newsreader to match the site's headings; falls back to the default font if the fetch fails.
async function loadNewsreader(): Promise<ArrayBuffer | null> {
  try {
    const css = await (
      await fetch('https://fonts.googleapis.com/css2?family=Newsreader:wght@500&display=swap', {
        // An old UA makes Google Fonts return TTF, which ImageResponse can read (it can't read WOFF2).
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Trident/7.0; rv:11.0) like Gecko' },
      })
    ).text();
    const url = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/)?.[1];
    return url ? await (await fetch(url)).arrayBuffer() : null;
  } catch {
    return null;
  }
}

export default async function OpengraphImage() {
  const serif = await loadNewsreader();
  // Satori crashes on `fontFamily: undefined`, so only set it when the font loaded.
  const serifStyle = serif ? { fontFamily: 'Newsreader' } : {};
  const site = new URL(identity.site).hostname.replace(/^www\./, '');

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          background: COLORS.cream, padding: '72px 80px', color: COLORS.ink,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ width: 14, height: 14, borderRadius: 999, background: COLORS.sage }} />
          <div style={{ fontSize: 24, letterSpacing: 3, textTransform: 'uppercase', color: COLORS.sage }}>
            Available for freelance &amp; remote
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 96, lineHeight: 1.05, ...serifStyle }}>{identity.name}</div>
          <div style={{ fontSize: 48, color: COLORS.sage, marginTop: 8, ...serifStyle }}>
            Senior Full Stack &amp; AI Developer
          </div>
          <div style={{ fontSize: 28, color: COLORS.muted, marginTop: 20 }}>
            10+ years · React · Next.js · Node.js · TypeScript · Cloud
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: 14 }}>
            {["L'Oréal", 'Abercrombie & Fitch', 'National Grid'].map((c) => (
              <div
                key={c}
                style={{
                  display: 'flex', fontSize: 24, padding: '10px 22px', borderRadius: 999,
                  background: COLORS.sageLight, border: `1px solid ${COLORS.border}`, color: COLORS.ink,
                }}
              >
                {c}
              </div>
            ))}
          </div>
          <div style={{ fontSize: 26, color: COLORS.muted }}>{site}</div>
        </div>
      </div>
    ),
    // Only pass `fonts` when Newsreader loaded: an empty list also disables the built-in default font.
    { ...size, ...(serif ? { fonts: [{ name: 'Newsreader', data: serif, weight: 500, style: 'normal' as const }] } : {}) },
  );
}
