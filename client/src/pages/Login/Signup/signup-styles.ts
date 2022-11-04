import styled from "styled-components";

export const SignupContainer = styled.div`
  /* height: 32rem; */
  width: 40rem;

  background-color: rgb(0, 0, 0, 0.8);

  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 488px) {
    width: 24rem;
  }

  @media screen and (max-width: 375px) {
    width: 22rem;
  }

  @media screen and (max-width: 340px) {
    width: 18rem;
  }
`;

export const Header = styled.header`
  margin-top: 1em;
  margin-bottom: 3em;

  display: flex;
  align-items: center;
  justify-content: center;

  .title-signup {
    color: #84cc16;

    font-size: 2.5rem;

    @media screen and (max-width: 375px) {
      font-size: 2rem;
    }

    @media screen and (max-width: 340px) {
      font-size: 1.8rem;
    }
  }
`;

export const Main = styled.main`
  .form-signup {
    padding-bottom: 1em;

    display: flex;
    flex-direction: column;
    align-items: center;

    .email-signup,
    .pass-signup,
    .confirm-pass-signup {
      display: flex;
      flex-direction: column;

      color: white;

      position: relative;
    }


  .envelope-signup,
  .lock-signup {
    position: absolute;
    top: 38px;
    left: 6px;
  }

  }


  .btnPassword, .btnConfirmPassword {
    position: absolute;
    top: 38px;
    left: 370px;

    cursor: pointer;

    @media screen and (max-width: 488px) {
      position: absolute;
      left: 290px;
    }

    @media screen and (max-width: 340px) {
      position: absolute;
      left: 225px;
    }
  }


  .btn-signup {
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

    @media screen and (max-width: 340px) {
      width: 16rem;
    }
  }

  .input-signup {
    width: 25rem;
    height: 3rem;

    border: 2px solid #4d7c0f;
    border-radius: 10px;

    padding-left: 30px;

    background-color: rgb(28, 28, 28, 0.6);
    color: white;

    margin-bottom: 20px;

    outline: none;

    transition: 0.4s ease-in-out;

    &::placeholder {
      color: #4d7c0f;

      font-size: 14px;
      font-weight: 600;
    }

    &:focus {
      border: 2px solid #facc15;

      transition: 0.4s ease-in-out;
    }

    @media screen and (max-width: 488px) {
      width: 20rem;
    }

    @media screen and (max-width: 340px) {
      width: 16rem;
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;

  .already-have-an-account{
    display: flex;
    align-items: center;

    padding-bottom: 20px;
  }

  .p-signup {
    color: white;

    font-size: 16px;
  }

  .link-signup {
    color: #facc15;

    font-size: 16px;

    padding-right: 50px;

    transition: 0.4s ease-in-out;

    &:hover {
      filter: brightness(0.6);
      transition: 0.4s ease-in-out;
    }

    @media screen and (max-width: 340px) {
      font-size: 14px;

      padding-right: 30px;
    }
  }
`;
