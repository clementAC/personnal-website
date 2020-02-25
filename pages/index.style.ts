import css from "styled-jsx/css";

export default css`
  .introduction {
    height: 100vh;
    padding-top: 60px; /* to avoid superposition with the navbar */
    background-image: url(/img/bg.jpg);
    background-position: center center;
    background-size: cover;
  }

  .introduction h1,
  .introduction h3 {
    color: black;
  }

  .profilPic {
    height: calc(100vh / 3.7);
    border: solid white 3px;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.75);
  }

  .introduction-content {
    background-color: rgba(187, 187, 187, 0.4);
    border-radius: 10px;
    box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.2);
  }

  .resume-content section > h1 {
    margin-bottom: 1.5rem;
    margin-top: 2rem;
    text-decoration: underline;
  }

  .resume-content article {
    margin-left: 3rem;
  }

  @media screen and (max-width: 576px) {
    .resume-content article {
      margin-left: 1rem;
    }
  }
`;
