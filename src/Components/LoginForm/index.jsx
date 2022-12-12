import "./style.scss";
import {useTheme} from "../../hooks/useTheme";

const LoginForm = () => {
  const handleSubmit = (e) => {
    //Nesse handlesubmit você deverá usar o preventDefault,
    //enviar os dados do formulário e enviá-los no corpo da requisição
    //para a rota da api que faz o login /auth
    //lembre-se que essa rota vai retornar um Bearer Token e o mesmo deve ser salvo
    //no localstorage para ser usado em chamadas futuras
    //Com tudo ocorrendo corretamente, o usuário deve ser redirecionado a página principal,com react-router
    //Lembre-se de usar um alerta para dizer se foi bem sucedido ou ocorreu um erro
  };

  const {theme} = useTheme()

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
            />
            <input
              className={`form-control input-login inputSpacing} ${theme}`}
              placeholder="Password"
              name="password"
              type="password"
              required
            />
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
