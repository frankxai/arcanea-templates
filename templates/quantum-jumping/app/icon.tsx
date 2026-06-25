import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 8,
          background:
            'linear-gradient(135deg, #8b5cf6 0%, #d946ef 50%, #22d3ee 100%)',
          color: '#ffffff',
          fontSize: 22,
          fontWeight: 800,
          fontFamily: 'sans-serif',
        }}
      >
        Q
      </div>
    ),
    { ...size },
  );
}
