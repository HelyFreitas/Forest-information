import styled from "styled-components";

export const SigninContainer = styled.div`
  height: 32rem;
  width: 40rem;

  background-color: rgb(0, 0, 0, 0.8);

  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 488px) {
    width: 24rem;
  }

  @media screen and (max-width: 375px) {
    width: 22rem;
  }
`;

export const Header = styled.header`
  margin-top: 2em;
  margin-bottom: 3em;

  display: flex;
  align-items: center;
  justify-content: center;

  .header-title {
    color: #84cc16;

    font-size: 2.5rem;

    @media screen and (max-width: 375px) {
      font-size: 2rem;
    }
  }
`;

export const Main = styled.main`
  .form-signin {
    padding-bottom: 1em;

    display: flex;
    flex-direction: column;
    align-items: center;

    .email-signin,
    .password-signin {
      display: flex;
      flex-direction: column;

      color: white;

      position: relative;
    }
  }

  .input-signin {
    width: 25rem;
    height: 3rem;

    border: 2px solid #4d7c0f;
    border-radius: 10px;

    padding-left: 30px;

    background-color: rgb(28, 28, 28, 0.6);
    color: white;

    margin-bottom: 20px;

    outline: none;

    &::placeholder {
      color: #4d7c0f;

      font-size: 14px;
      font-weight: 600;
    }

    @media screen and (max-width: 488px) {
      width: 20rem;
    }
  }

  .btnbtn {
    position: absolute;
    top: 38px;
    left: 370px;

    cursor: pointer;

    @media screen and (max-width: 488px) {
      position: absolute;
      left: 290px;
    }
  }

  .envelope-signin,
  .lock-signin {
    position: absolute;
    top: 38px;
    left: 6px;
  }

  .btn-signin {
    width: 25rem;
    height: 2.5rem;

    background-color: #4d7c0f;
    color: white;

    font-weight: 700;
    font-size: 16px;

    border: none;
    border-radius: 10px;

    margin-bottom: 3em;

    cursor: pointer;

    transition: 0.4s ease-in-out;

    &:hover {
      filter: brightness(0.6);
      transition: 0.4s ease-in-out;
    }

    @media screen and (max-width: 488px) {
      width: 20rem;
    }
  }
`;

export const Footer = styled.footer`
  display: flex;

  .dont-have-account {
    display: flex;
    align-items: center;
  }

  .p-signin {
    color: white;

    font-size: 16px;

    @media screen and (max-width: 488px) {
      display: none;
    }
  }

  .link-signin {
    color: #facc15;

    font-size: 16px;

    padding-right: 50px;

    transition: 0.4s ease-in-out;

    &:hover {
      filter: brightness(0.6);
      transition: 0.4s ease-in-out;
    }
  }

  .forgot-pass-signin {
    color: #facc15;

    font-size: 16px;

    transition: 0.4s ease-in-out;

    &:hover {
      filter: brightness(0.6);
      transition: 0.4s ease-in-out;
    }
  }
`;
