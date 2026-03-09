import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Abin PM — Senior Full Stack Developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #111827 50%, #0a0a0a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '72px 80px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          position: 'relative',
        }}
      >
        {/* Grid background lines */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(99,102,241,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.08) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Glow */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)',
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', zIndex: 1 }}>
          {/* Badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(99,102,241,0.15)',
              border: '1px solid rgba(99,102,241,0.4)',
              borderRadius: '100px',
              padding: '6px 18px',
              width: 'fit-content',
            }}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#22c55e',
              }}
            />
            <span style={{ color: '#a5b4fc', fontSize: '14px', fontWeight: 600, letterSpacing: '0.08em' }}>
              AVAILABLE FOR FREELANCE &amp; REMOTE
            </span>
          </div>

          {/* Name */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span style={{ color: '#f9fafb', fontSize: '64px', fontWeight: 800, lineHeight: 1.1 }}>
              Abin PM
            </span>
            <span style={{ color: '#a5b4fc', fontSize: '28px', fontWeight: 600, lineHeight: 1.3 }}>
              Senior Full Stack &amp; MERN Developer
            </span>
          </div>

          {/* Description */}
          <span style={{ color: '#9ca3af', fontSize: '20px', maxWidth: '700px', lineHeight: 1.5 }}>
            9+ years · React.js · Next.js · Node.js · TypeScript · AWS · AI-Assisted Dev
          </span>

          {/* Tags */}
          <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
            {['IBM', 'Abercrombie & Fitch', 'National Grid'].map((tag) => (
              <div
                key={tag}
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: '6px',
                  padding: '6px 14px',
                  color: '#d1d5db',
                  fontSize: '14px',
                  fontWeight: 500,
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '48px',
            right: '80px',
            color: '#6b7280',
            fontSize: '16px',
            fontWeight: 500,
          }}
        >
          abinaiengineer.com
        </div>
      </div>
    ),
    size,
  );
}
