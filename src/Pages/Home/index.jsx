import { useEffect, useState } from "react";
import { Card } from "../../Components/Card";

export const Home = () => {
  const [dentist, setDentist] = useState([""]);

  useEffect(() => {
    fetch("https://dhodonto.ctdprojetos.com.br/dentista").then((res) =>
      res.json().then((data) => setDentist(data))
    );
  }, []);

  return (
    <>
      <h1>Home</h1>
      <div className="card-grid container">
        {dentist.map((a, index) => (
          <Card key={index} data={a} />
        ))}
      </div>
    </>
  );
};
