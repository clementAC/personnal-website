import * as React from "react";
import Head from "next/head";

import Header from "./Header";
import Footer from "./Footer";
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
        <link rel="shortcut icon" href="/img/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Portfolio de clément aceituno" />
      </Head>
      <Header />
      <main className="main-content d-flex flex-column">{children}</main>
      <Footer />

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
      <style jsx global>
        {`
          .page {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
          }
          .icon-light {
            color: white;
          }

          .icon-dark {
            color: black;
          }

          .main-content {
            flex-grow: 1;
          }
        `}
      </style>
    </div>
  );
};

export default Layout;
