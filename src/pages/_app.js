import "@/styles/globals.css";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      offset: 50,
    });
  }, []);
  
  return <Component {...pageProps} />;
}
