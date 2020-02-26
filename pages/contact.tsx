import * as React from "react";
import Layout from "../components/Layout";
import ThemeContext from "../context/Theme";

const Contact: React.FC = () => {
  const { isDark } = React.useContext(ThemeContext);
  return (
    <Layout title="Clement Aceituno - contact">
      <div className="container">
        <h1>Me contacter</h1>
        <form id="contactForm">
          <div className="form-group">
            <label htmlFor="firstname">Prénom</label>
            <input
              type="text"
              className="form-control"
              id="firstname"
              autoComplete="given-name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Nom</label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              autoComplete="family-name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Adresse email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              autoComplete="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Votre message</label>
            <textarea className="form-control" id="message" rows={3} />
          </div>
          <button
            type="submit"
            className={`btn ${isDark ? "btn-light" : "btn-dark"}`}
          >
            Envoyer
          </button>
        </form>
      </div>
      <style jsx>
        {`
          .container {
            padding-top: 100px;
          }
        `}
      </style>
    </Layout>
  );
};

export default Contact;
