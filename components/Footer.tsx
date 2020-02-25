import React from "react";

const Footer = () => {
  return (
    <div>
      <span>Clément Aceituno</span> -
      <a href={`${process.env.PUBLIC_URL}/clementAceituno.pdf`} download>
        Mon CV
      </a>{" "}
      - <a href="https://github.com/clementAC">Github</a> -
      <a href="https://twitter.com/ClementACEITUNO">Twitter</a> -
      <a href="https://www.linkedin.com/in/clement-aceituno/">Linkedin</a>
    </div>
  );
};

export default Footer;
