import * as React from "react";
import Layout from "../components/Layout";
import ThemeContext from "../context/Theme";

const Contact: React.FC = () => {
  const { isDark } = React.useContext(ThemeContext);
  const [formMessage, setFormMessage] = React.useState("");

  const form = React.useRef<HTMLFormElement>(null);

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      const formEntries = new FormData(form.current!).entries();
      const bodyData: { [key: string]: any } = {
        lastname: "",
        firstname: "",
        email: "",
        message: ""
      };
      for (let entry of formEntries) {
        bodyData[entry[0]] = entry[1];
      }
      const response = await fetch(
        `https://0e2qmvm2g2.execute-api.eu-west-1.amazonaws.com/dev/contact`,
        {
          method: "POST",
          mode: "cors",
          body: JSON.stringify(bodyData)
        }
      );
      console.log(response);
      if (response.status !== 200) {
        throw Error("status != 200");
      }
      form.current!.reset();
      setFormMessage(
        "Votre message à été envoyé. Je vous réponds au plus vite !"
      );
    } catch (error) {
      console.error(error);
      setFormMessage(
        "Une erreur s'est produite et votre message n'a pas été envoyé."
      );
    }
  };

  return (
    <Layout title="Clement Aceituno - contact">
      <div className="container">
        <h1>Me contacter</h1>
        <form ref={form} id="contactForm" onSubmit={submitHandler}>
          {formMessage !== "" && <p>{formMessage}</p>}
          <div className="form-group">
            <label htmlFor="firstname">Prénom *</label>
            <input
              type="text"
              className="form-control"
              name="firstname"
              id="firstname"
              required
              autoComplete="given-name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Nom</label>
            <input
              type="text"
              className="form-control"
              name="lastname"
              id="lastname"
              autoComplete="family-name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Adresse email *</label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              required
              autoComplete="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Votre message *</label>
            <textarea
              className="form-control"
              name="message"
              id="message"
              required
              rows={3}
            />
          </div>
          <p>Les champs marqué d'un astérisque (*) sont obligatoires</p>
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
