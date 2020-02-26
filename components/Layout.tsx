import * as React from "react";
import Head from "next/head";

import Header from "./Header";
import Footer from "./Footer";
import layoutStyle from "./Layout.styles";
import ThemeContext from "../context/Theme";

type Props = {
  title: string;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "Clément Aceituno"
}) => {
  const { theme } = React.useContext(ThemeContext);
  return (
    <div className="page">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Sans&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <main className="main-content">{children}</main>
      <Footer />
      <style jsx global>
        {layoutStyle}
      </style>
      <style jsx global>
        {`
          * {
            font-family: "Noto Sans", serif;
            color: ${theme.colors.text};
          }
          body {
            background-color: ${theme.colors.background};
          }
          a:link {
            color: ${theme.colors.link};
            font-weight: bold;
          }
          a:visited {
            color: ${theme.colors.link};
            font-weight: bold;
          }
          a:hover {
            color: ${theme.colors.linkHover};
            font-weight: bold;
            text-decoration: none;
          }
          a:active {
            color: ${theme.colors.link};
            text-decoration: none;
          }
        `}
      </style>
    </div>
  );
};

export default Layout;
