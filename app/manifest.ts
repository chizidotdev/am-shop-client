import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    theme_color: "#2563eb",
    background_color: "#2563eb",
    display: "standalone",
    scope: "/",
    start_url: "/",
    name: "Copia - Aidmedium",
    short_name: "Copia",
    description: "Copia is a modern e-commerce platform for everyone.",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-256x256.png",
        sizes: "256x256",
        type: "image/png",
      },
      {
        src: "/icon-384x384.png",
        sizes: "384x384",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
