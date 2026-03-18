import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Lenny, For You — Your Personalized Lenny's Newsletter Feed";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#0F172A",
          color: "#F8FAFC",
          fontFamily: "sans-serif",
          padding: "60px",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            textAlign: "center",
            lineHeight: 1.1,
            marginBottom: "24px",
          }}
        >
          Lenny, For You
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#94A3B8",
            textAlign: "center",
            lineHeight: 1.4,
          }}
        >
          650 posts. 300 guests. Personalized for you.
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginTop: "48px",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: "#3B82F6",
            }}
          />
          <div style={{ fontSize: 20, color: "#64748B" }}>
            Powered by Lenny&apos;s Newsletter
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
