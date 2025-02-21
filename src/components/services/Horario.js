import React from "react";
import { useContext } from "react";
import { ServicesContext } from "../context/ServicesContext";

function Horario () {
    const { horarioData } = useContext(ServicesContext);
  return (
    <div>
      <h1>HORARIO</h1>
      
      <table>
        <thead>
            <tr>
                <th>Horas</th>
                <th>Lunes</th>
                <th>Martes</th>
                <th>Miercoles</th>
                <th>Jueves</th>
                <th>Viernes</th>
                <th>Sabado</th>
                <th>Domingo</th>
            </tr>
        </thead>
        <tbody>
        {horarioData.horario.map((item, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{item.hora}</td>
              <td className="border px-4 py-2">{item.Lunes ? item.Lunes : ""}</td>
              <td className="border px-4 py-2">{item.Martes ? item.Martes : ""}</td>
              <td className="border px-4 py-2">{item.Miércoles ? item.Miércoles : ""}</td>
              <td className="border px-4 py-2">{item.Jueves ? item.Jueves : ""}</td>
              <td className="border px-4 py-2">{item.Viernes ? item.Viernes : ""}</td>
              <td className="border px-4 py-2">{item.Sábado ? item.Sábado : ""}</td>
              <td className="border px-4 py-2">{item.Domingo ? item.Domingo : ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Horario;