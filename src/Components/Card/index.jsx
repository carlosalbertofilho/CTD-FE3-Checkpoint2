import {Link, useParams} from "react-router-dom";
import "./style.scss";
import {useTheme} from "../../hooks/useTheme";

export const Card = () => {

    const {id} = useParams();
    const {theme} = useTheme()

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
                    <Link to={`/detail/${id}`}>
                        <h5 className={`card-title ${theme}`}>
                            Nome e Sobrenome do dentista
                        </h5>
                    </Link>
                </div>
            </div>
        </>
    );
};
