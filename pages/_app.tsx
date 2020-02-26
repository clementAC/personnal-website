import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { ThemeContextProvider } from "../context/Theme";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider isDark={true}>
      <Component {...pageProps} />
    </ThemeContextProvider>
  );
}
