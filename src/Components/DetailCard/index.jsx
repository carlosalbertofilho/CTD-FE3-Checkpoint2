import { useState, useEffect } from "react";
import ScheduleFormModal from "../../Components/ScheduleFormModal";
import "./style.scss";
import { useTheme } from "../../hooks/useTheme";
import { useParams } from "react-router-dom";
import { useToken } from "../../hooks/useToken";

export const DetailCard = () => {
  const { id } = useParams();
  const { theme } = useTheme();
  const [dentist, setDentist] = useState({});

  useEffect(() => {
    fetch(`http://dhodonto.ctdprojetos.com.br/dentista?matricula=${id}`)
      .then((res) => res.json())
      .then((data) => setDentist(data));
  }, []);

  return (
    //As instruııes que estıo com {''} precisam ser
    //substituıdas com as informaııes que vem da api
    <>
      <>
        <h1>Detail about Dentist {dentist.nome} </h1>
        <section className="card col-sm-12 col-lg-6 container">
          {/* //Na linha seguinte deverı ser feito um teste se a aplicaııo
        // estÃ¡ em dark mode e deverÃ¡ utilizar o css correto */}
          <div className={`card-body row ${theme}`}>
            <div className="col-sm-12 col-lg-6">
              <img
                className="card-img-top"
                src="/images/doctor.jpg"
                alt="doctor placeholder"
              />
            </div>
            <div className="col-sm-12 col-lg-6">
              <ul className="list-group">
                <li className="list-group-item">Nome: {dentist.nome}</li>
                <li className="list-group-item">
                  Sobrenome: {dentist.sobrenome}
                </li>
                <li className="list-group-item">UsuÃ¡rio: {dentist.nome}</li>
              </ul>
              <div className="text-center">
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  className={`btn btn-${theme} button`}
                >
                  Marcar consulta
                </button>
              </div>
            </div>
          </div>
        </section>
      </>

      <ScheduleFormModal />
    </>
  );
};
