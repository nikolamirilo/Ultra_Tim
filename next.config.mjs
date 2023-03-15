const nextConfig = {
  modularizeImports: {
    "react-icons": {
      transform: "react-icons/{{member}}",
    },
  },
  i18n: {
    locales: ["sr", "en"],
    defaultLocale: "sr",
    localeDetection: false,
  },
  async rewrites() {
    return [
      {
        source: "/", // automatically handles all locales
        destination: "/", // automatically passes the locale on
      },
      {
        source: "/contact",
        destination: "/kontakt",
      },
    ];
  },
};

export default nextConfig;
