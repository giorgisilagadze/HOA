import ContactComp from "@/components/ContactComp";
import NavBar from "@/components/admin/NavBar";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import "@/styles/globals.css";
import MainContext from "@/utils/MainContext";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const route = useRouter();

  return (
    <>
      {route.asPath.includes("/admin/") ? (
        <MainContext>
          <NavBar>
            <Component {...pageProps} />
          </NavBar>
        </MainContext>
      ) : route.asPath == "/admin" ? (
        <MainContext>
          <Component {...pageProps} />
        </MainContext>
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
