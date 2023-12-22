import ContactComp from "@/components/ContactComp";
import NavBar from "@/components/admin/NavBar";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const route = useRouter();

  return (
    <>
      {route.asPath.includes("/admin/") ? (
        <NavBar>
          <Component {...pageProps} />
        </NavBar>
      ) : route.asPath == "/admin" ? (
        <Component {...pageProps} />
      ) : (
        <>
          <Header />
          <ContactComp />
          <Component {...pageProps} />
          <Footer />
        </>
      )}
    </>
  );
}
