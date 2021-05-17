import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
/* cores do site */
  :root {
    --background: #f0f2f5;
    --red: #e52e4d;
    --green: #33cc95;
    --blue: #5429cc;
    
    --light-blue: #6933ff;

    --text-tile: #363f5f;
    --text-body: #969cb3;

    --shape: #fff;
  }

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


/* fontes do site em diversas telas */
html{

  /* fonte size 16px para desktop */

  @media (max-width: 1080px){
    font-size: 93.75%; //15px
  }

  @media (max-width: 720px){
    font-size: 87.5%; //14px
  }

}

  body{
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button{
    font-family: 'poppins', sans-serif;
    font-weight: 400;
  }

  /* fontes */
  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
  }

  button{
    cursor: pointer;
  }

  [disabled] {
    opacity: 0,6;
    cursor: not-allowed;
  }

  .react-modal-overlay{
    background: rgba(0,0,0, .5);

    position: fixed;
    bottom: 0;
    top: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content{
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: .25rem;
  }

  .react-modal-close{
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;

    transition: filter .2s;

    &:hover{
      filter: brightness(.7);
    }
  }
`;
