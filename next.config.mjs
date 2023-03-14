const { i18n } = await import("./next-i18next.config.js");

const nextConfig = {
  modularizeImports: {
    "react-icons": {
      transform: "react-icons/{{member}}",
    },
  },
  i18n,
};

export default nextConfig;
