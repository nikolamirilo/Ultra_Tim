import { Footer, Navbar } from "@/components";
import { Head, Html, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Navbar />
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  );
}
