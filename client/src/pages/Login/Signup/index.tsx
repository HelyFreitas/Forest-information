import * as C from "./signup-styles";

export const Signup = () => {
  return (
    <C.SignupContainer>
      <C.Header>
        <h1>Cadastre-se</h1>
        <form className="form-signup" autoComplete="off">
            <section className="email-signup">
                <label htmlFor="email">E-mail:</label>
                <input type="email" placeholder="Digite seu e-mail" />
            </section>
            <section className="pass-signup">
                <label htmlFor="pass">Senha:</label>
                <input type="password" placeholder="Digite sua senha" />
            </section>
            <section className="confirm-pass-signup">
                <label htmlFor="confirmpass">Confirme sua senha:</label>
                <input type="password" placeholder="Confirme sua senha" />
            </section>
        </form>
      </C.Header>
    </C.SignupContainer>
  );
};
