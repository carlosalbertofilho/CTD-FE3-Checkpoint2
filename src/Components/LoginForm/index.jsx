import "./style.scss";
import { useTheme } from "../../hooks/useTheme";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToken } from "../../hooks/useToken";
import { useClientName } from "../../hooks/useClientName";

const LoginForm = () => {
  const handleSubmit = (e) => {
    //Nesse handlesubmit você deverá usar o preventDefault,
    e.preventDefault();
    validar();
    setLogin("");
    setPassword("");

    validar();
    //enviar os dados do formulário e enviá-los no corpo da requisição
    signUp();
  };

  const { theme } = useTheme();
  const { token, changeToken } = useToken();
  const { clientName, changeClientName } = useClientName();
  const [loginError, setLoginError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [authPass, setAuthPass] = useState(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [tokenCheck, setTokenCheck] = useState(false);
  const navigate = useNavigate();

  const data = {
    username: login,
    password: password,
  };

  const signUp = () => {
    fetch("https://dhodonto.ctdprojetos.com.br/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(function (response) {
        if (response.ok) return response.json();
        else alert("Credências Inválidas!");
      })
      .then(function (user) {
        changeToken(user.token);
        changeClientName(login);
        alert("Login realizado com sucesso!");
        setAuthPass(true);
      });
  };

  const validar = () => {
    setLoginError(login.length <= 5);
    setPasswordError(password.length <= 5);
  };

  useEffect(() => {
    (token !== null && token !== '')
      ? setTokenCheck(true)
      : setTokenCheck(false);
  });


  useEffect(() => {
    //para a rota da api que faz o login /auth
    if (authPass) navigate("/");
  }, [authPass]);

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div className={`text-center container  form ${theme}`}>
        <div className={``}>
          <form className="form-login" onSubmit={handleSubmit}>
            <input
              className={`form-control input-login inputSpacing ${theme}`}
              placeholder="Login"
              name="login"
              required
              value={login}
              onChange={(event) => setLogin(event.target.value)}
            />
            {loginError && (
              <span className="alert alert-danger">
                Login Erro - Verifique suas informação novamente
              </span>
            )}
            <input
              className={`form-control input-login inputSpacing ${theme}`}
              placeholder="Password"
              name="password"
              type="password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            {passwordError && (
              <span className="alert alert-danger">
                Password Error - Verifique suas informação novamente
              </span>
            )}
            <button className="btn btn-primary" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default LoginForm;
