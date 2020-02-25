import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav>
        <Link href="/">Clément Aceituno</Link>{" "}
        <Link href="/contact">Me contacter</Link>
        <a href="/doc/clementAceituno.pdf" download>
          Télécharger mon CV
        </a>
      </nav>
    </header>
  );
};

export default Header;
