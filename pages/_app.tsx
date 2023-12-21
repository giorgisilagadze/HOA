import ContactComp from "@/components/ContactComp";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <ContactComp />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
