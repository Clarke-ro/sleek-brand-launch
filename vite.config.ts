import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { site, studioDescription, studioTitle, studioUrl } from "./src/content/site";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function studioManifest() {
  return {
    name: site.name,
    short_name: site.name,
    description: studioDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#f4f3ef",
    theme_color: "#f4f3ef",
    orientation: "portrait-primary",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    categories: ["business"],
  };
}

function studioJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    url: studioUrl,
    image: `${studioUrl}og.jpg`,
    description: studioDescription,
    areaServed: "Accra",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Accra",
      addressCountry: "GH",
    },
    founder: {
      "@type": "Person",
      name: site.founder,
    },
  };
}

function applyStudioHtml(html: string) {
  return html
    .replaceAll("__STUDIO_TITLE__", escapeHtml(studioTitle))
    .replaceAll("__STUDIO_DESCRIPTION__", escapeHtml(studioDescription))
    .replaceAll("__STUDIO_NAME__", escapeHtml(site.name))
    .replaceAll("__STUDIO_URL__", escapeHtml(studioUrl))
    .replaceAll("__STUDIO_JSONLD__", JSON.stringify(studioJsonLd()));
}

function studioBrandPlugin(): Plugin {
  return {
    name: "studio-brand",
    transformIndexHtml(html) {
      return applyStudioHtml(html);
    },
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const pathname = req.url?.split("?")[0];
        if (pathname !== "/manifest.json") {
          next();
          return;
        }
        res.setHeader("Content-Type", "application/manifest+json");
        res.end(JSON.stringify(studioManifest()));
      });
    },
    generateBundle() {
      this.emitFile({
        type: "asset",
        fileName: "manifest.json",
        source: JSON.stringify(studioManifest(), null, 2),
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    studioBrandPlugin(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
