const fs = require("fs");
const path = require("path");

function loadEnv() {
  const envPath = path.join(__dirname, "..", ".env");
  if (!fs.existsSync(envPath)) return {};

  const content = fs.readFileSync(envPath, "utf-8");
  const env = {};
  content.split("\n").forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) return;
    const [key, ...rest] = trimmed.split("=");
    if (key) env[key.trim()] = rest.join("=").trim();
  });
  return env;
}

const env = loadEnv();
const rawUrl = env.REACT_APP_SITE_URL || "https://zad_al_muslim.adnandev.cloud";
// إزالة أي سلاش زيادة في الآخر عشان ميتكررش
const siteUrl = rawUrl.replace(/\/+$/, "");

const publicDir = path.join(__dirname, "..", "public");

// --- تحديث robots.txt ---
const robotsContent = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;
fs.writeFileSync(path.join(publicDir, "robots.txt"), robotsContent, "utf-8");

// --- تحديث sitemap.xml ---
const today = new Date().toISOString().split("T")[0];
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>

<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

</urlset>
`;
fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemapContent, "utf-8");

console.log(`✔ robots.txt و sitemap.xml اتحدّثوا بالدومين: ${siteUrl}`);
