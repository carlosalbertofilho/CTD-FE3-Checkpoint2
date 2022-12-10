import "./style.scss";
import {useTheme} from "../../hooks/useTheme";
import { useState } from "react";
import { Navigate, redirect, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const handleSubmit = (e) => {
    //Nesse handlesubmit você deverá usar o preventDefault,
    e.preventDefault();
    validar()
    setLogin('')
    setPassword('')

    //enviar os dados do formulário e enviá-los no corpo da requisição
    signUp()

    if (localStorage.getItem('jwt') !== null) {
      navigate('/')
    }
    //para a rota da api que faz o login /auth
    //lembre-se que essa rota vai retornar um Bearer Token e o mesmo deve ser salvo
    //no localstorage para ser usado em chamadas futuras
    //Com tudo ocorrendo corretamente, o usuário deve ser redirecionado a página principal,com react-router
    //Lembre-se de usar um alerta para dizer se foi bem sucedido ou ocorreu um erro
  };

  const {theme} = useTheme()
  const [loginError, setLoginError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const data = {
    username: login,
    password: password
    }

  const signUp = () => {
    fetch('https://dhodonto.ctdprojetos.com.br/auth', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(function (response) {
      return response.json();
    })
    .then(function (user) {
      localStorage.setItem('jwt', user.token)
    });
  }

  const validar = () => {
    if (login.length <= 5) {
      setLoginError(true)
    }else {
      setLoginError(false)
    }

    if (password.length <= 5) {
      setPasswordError(true)
    }else{
      setPasswordError(false)
    }
  }

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
              onChange={event => setLogin(event.target.value)}
            />
            {
              loginError && (<span>Verifique suas informação novamente</span>)
            }
            <input
              className={`form-control input-login inputSpacing} ${theme}`}
              placeholder="Password"
              name="password"
              type="password"
              required
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
            {
              passwordError && (<span>Verifique suas informação novamente</span>)
            }
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
