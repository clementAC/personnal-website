import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithubSquare,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import footerStyles from "../style/Footer.styles";

const Footer = () => {
  return (
    <div className="container my-4 d-flex justify-content-between align-items-center">
      <span>Clément Aceituno</span>
      <div className="d-flex align-items-center">
        <a href={`${process.env.PUBLIC_URL}/clementAceituno.pdf`} download>
          Mon CV
        </a>
        {" - "}
        <span className="footerIcons">
          <a href="https://github.com/clementAC">
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
          <a href="https://twitter.com/ClementACEITUNO">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.linkedin.com/in/clement-aceituno/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </span>
      </div>
      <style jsx>{footerStyles}</style>
    </div>
  );
};

export default Footer;
