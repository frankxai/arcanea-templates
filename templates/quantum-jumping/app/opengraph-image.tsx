import { ImageResponse } from 'next/og';

export const alt = 'Quantum Jump — Visit the lives you haven\'t lived yet';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#09090b',
          position: 'relative',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Aurora wash */}
        <div
          style={{
            position: 'absolute',
            top: -200,
            left: 300,
            width: 600,
            height: 600,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(139,92,246,0.45), transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -200,
            right: 200,
            width: 600,
            height: 600,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(34,211,238,0.3), transparent 70%)',
          }}
        />

        {/* Portal mark */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 160,
            height: 160,
            borderRadius: '50%',
            marginBottom: 48,
            background:
              'radial-gradient(circle at 35% 30%, #c4b5fd, #7c3aed 45%, #312e81 80%, #0b0b1a)',
            boxShadow: '0 0 80px rgba(139,92,246,0.7)',
            border: '2px solid rgba(167,139,250,0.4)',
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: 80,
              fontWeight: 800,
              color: '#ffffff',
            }}
          >
            Q
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: 76,
            fontWeight: 700,
            color: '#f4f4f5',
            letterSpacing: -2,
          }}
        >
          Quantum Jump
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 30,
            color: '#a1a1aa',
            marginTop: 16,
            maxWidth: 760,
            textAlign: 'center',
          }}
        >
          Visit the lives you haven&apos;t lived yet.
        </div>
      </div>
    ),
    { ...size },
  );
}
