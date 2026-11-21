import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Skicka alla besök på www.skeningevvs.se till huvuddomänen så att Google
  // bara ser en version av sidan (se SEO-regler i AGENTS.md).
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.skeningevvs.se" }],
        destination: "https://skeningevvs.se/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
