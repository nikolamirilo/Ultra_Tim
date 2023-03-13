import moment from "moment";
const date = moment().format("MMM Do YY");

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://mirilo-nikola.netlify.app/</loc>
       <lastmod>${date}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>1</priority>
     </url>
     <url>
       <loc>https://mirilo-nikola.netlify.app/about</loc>
       <lastmod>${date}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>0.9</priority>
     </url>
     <url>
       <loc>https://mirilo-nikola.netlify.app/contact</loc>
       <lastmod>${date}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>0.8</priority>
     </url>
   </urlset>
 `;
}

function SiteMap({ sitemap }) {
  return <>{sitemap}</>;
}

export async function getServerSideProps({ res }) {
  // We generate the XML sitemap with the projects data
  const sitemap = generateSiteMap();

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: { sitemap },
  };
}

export default SiteMap;
