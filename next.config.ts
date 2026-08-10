import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Otimiza imagens para formatos modernos automaticamente */
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
