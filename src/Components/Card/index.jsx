import "./style.scss"
import { Link } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";

export const Card = (props) => {

  const { theme } = useTheme()

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div className={`card ${theme}`}>
        <img
          className="card-img-top"
          src="/images/doctor.jpg"
          alt="doctor placeholder"
        />
        <div className={`card-body ${theme}`}>
          {/* Na linha seguinte o link deverá utilizar a matricula, nome e sobrenome do dentista
          que vem da API */}
          <Link to={`/detail/${props.data.matricula}`}>
            <h5 className={`card-title ${theme}`}>
              {props.data.nome}
            </h5>
            <p>{props.data.sobrenome}</p>
          </Link>
        </div>
      </div>
    </>
  );
};
