import css from "styled-jsx/css";

export default css`
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
`;
