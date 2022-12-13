import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToken } from "../../hooks/useToken";
import styles from "./style.css";

const ScheduleForm = () => {
  const Token = useToken();
  const Navegate = useNavigate();
  const [dentisList, setDentistList] = useState([]);
  const [patientList, setPatientList] = useState([]);

  useEffect(() => {
    //Nesse useEffect, você vai fazer um fetch na api buscando TODOS os dentistas
    //e pacientes e carregar os dados em 2 estados diferentes
    fetch("http://dhodonto.ctdprojetos.com.br/paciente")
      .then((res) => res.json())
      .then((data) => setPatientList(data.body));

    fetch("http://dhodonto.ctdprojetos.com.br/dentista")
      .then((res) => res.json())
      .then((data) => setDentistList(data));

    if (Token === null && Token === "") {
      alert("Você precisar está logado para marcar uma consulta");
      Navegate("/login");
    }
  }, []);

  const handleSubmit = (event) => {
    //Nesse handlesubmit você deverá usar o preventDefault,
    //obter os dados do formulário e enviá-los no corpo da requisição
    //para a rota da api que marca a consulta
    //lembre-se que essa rota precisa de um Bearer Token para funcionar.
    //Lembre-se de usar um alerta para dizer se foi bem sucedido ou ocorreu um erro
    event.preventDefault();
  };

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div className={`text-center container}`}>
        <form onSubmit={handleSubmit}>
          <div className={`row ${styles.rowSpacing}`}>
            <div className="col-sm-12 col-lg-6">
              <label htmlFor="dentist" className="form-label">
                Dentist
              </label>
              <select className="form-select" name="dentist" id="dentist">
                {
                  /*Aqui deve ser feito um map para listar todos os dentistas*/
                  dentisList.map((dentist) => {
                    return (
                        <option
                          key={dentist.matricula}
                          value={dentist.matricula}
                        >
                          {`${dentist.nome} ${dentist.sobrenome}`}
                        </option>
                    );
                  })
                }
              </select>
            </div>
            <div className="col-sm-12 col-lg-6">
              <label htmlFor="patient" className="form-label">
                Patient
              </label>
              <select className="form-select" name="patient" id="patient">
                {
                  /*Aqui deve ser feito um map para listar todos os pacientes*/
                  patientList.map((patient) => {
                    return (
                        <option
                          key={patient.matricula}
                          value={patient.matricula}
                        >
                          {`${patient.nome} ${patient.sobrenome}`}
                        </option>
                    );
                  })
                }
              </select>
            </div>
          </div>
          <div className={`row ${styles.rowSpacing}`}>
            <div className="col-12">
              <label htmlFor="appointmentDate" className="form-label">
                Date
              </label>
              <input
                className="form-control"
                id="appointmentDate"
                name="appointmentDate"
                type="datetime-local"
              />
            </div>
          </div>
          <div className={`row ${styles.rowSpacing}`}>
            {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
            <button className={`btn btn-light ${styles.button}`} type="submit">
              Schedule
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default ScheduleForm;
