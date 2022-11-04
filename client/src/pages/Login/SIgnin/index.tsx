import * as S from "./signin-styles";

import { Link } from "react-router-dom";

import { EyeSlash, Eye, Envelope, LockSimple, SignIn } from "phosphor-react";
import { useState } from "react";

export const Signin = () => {
  const [state, setstate] = useState(false);

  const toggleBtn = () => {
    setstate((prevState) => !prevState);
  };

  return (
    <S.SigninContainer>
      <S.Header>
        <SignIn size={50} color="#fccc16" weight="bold" />
        <h1 className="header-title">Faça seu login</h1>
      </S.Header>
      <S.Main>
        <form className="form-signin" autoComplete="off">
          <section className="email-signin">
            <label htmlFor="email">E-mail:</label>
            {/*<Envelope className="envelope-signin" size={20} color="#86cc16" />*/}
            <input
              className="input-signin"
              type="email"
              placeholder="Digite seu e-mail"
              id="email"
            />
          </section>
          <section className="password-signin">
            <label htmlFor="pass">Senha:</label>
            <LockSimple className="lock-signin" size={20} color="#86cc16" />
            <input
              className="input-signin"
              type={state ? "text" : "password"}
              id="pass"
              placeholder="Digite sua senha"
            />
            <div className="btnbtn">
              <div className="btn" onClick={toggleBtn}>
                {state ? (
                  <Eye size={20} color="#84cc16" className="icon" />
                ) : (
                  <EyeSlash size={20} color="#84cc16" className="icon2" />
                )}
              </div>
            </div>
          </section>
        </form>
        <button className="btn-signin">Entrar</button>
      </S.Main>
      <S.Footer>
        <section className="dont-have-account">
          <p className="p-signin">Não tem uma conta?&nbsp;</p>
          <Link className="link-signin" to="/signup">
            Cadastre-se
          </Link>
        </section>
        <section className="forgot-pass">
          <Link className="forgot-pass-signin" to="/forgotpass">
            Esqueceu sua senha?
          </Link>
        </section>
      </S.Footer>
    </S.SigninContainer>
  );
};
