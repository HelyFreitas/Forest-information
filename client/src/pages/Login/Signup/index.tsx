import { Envelope, Eye, EyeSlash, LockSimple, SignIn } from "phosphor-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as C from "./signup-styles";

export const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickBtn = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleClickBtnConfirm = () => {
    setShowConfirmPassword((prevState) => !prevState);
  };

  return (
    <C.SignupContainer>
      <C.Header>
        <SignIn size={50} color="#fccc16" weight="bold" />
        <h1 className="title-signup">Cadastre-se</h1>
      </C.Header>
      <C.Main>
        <form className="form-signup" autoComplete="off">
          <section className="email-signup">
            <label htmlFor="email">E-mail:</label>
            <Envelope className="envelope-signup" size={20} color="#86cc16" />
            <input
              className="input-signup"
              type="email"
              placeholder="Digite seu e-mail"
              id="email"
            />
          </section>
          <section className="pass-signup">
            <label htmlFor="pass">Senha:</label>
            <LockSimple className="lock-signup" size={20} color="#86cc16" />
            <input
              className="input-signup"
              type={showPassword ? "text" : "password"}
              placeholder="Digite sua senha"
              id="pass"
            />
            <div className="btnPassword">
              <div className="btn" onClick={handleClickBtn}>
                {showPassword ? (
                  <Eye size={20} color="#84cc16" className="icon" />
                ) : (
                  <EyeSlash size={20} color="#84cc16" className="icon2" />
                )}
              </div>
            </div>
          </section>
          <section className="confirm-pass-signup">
            <label htmlFor="confirmpass">Confirme sua senha:</label>
            <LockSimple className="lock-signup" size={20} color="#86cc16" />
            <input
              className="input-signup"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirme sua senha"
              id="confirmpass"
            />
            <div className="btnConfirmPassword">
              <div className="btn" onClick={handleClickBtnConfirm}>
                {showConfirmPassword ? (
                  <Eye size={20} color="#84cc16" className="icon" />
                ) : (
                  <EyeSlash size={20} color="#84cc16" className="icon2" />
                )}
              </div>
            </div>
          </section>
        </form>
        <button className="btn-signup">Cadastrar</button>
      </C.Main>
      <C.Footer>
        <section className="already-have-an-account">
          <p className="p-signup">Já tem uma conta?&nbsp;</p>
          <Link className="link-signup" to="/">
            Entrar
          </Link>
        </section>
      </C.Footer>
    </C.SignupContainer>
  );
};
