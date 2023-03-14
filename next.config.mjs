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
};

export default nextConfig;
