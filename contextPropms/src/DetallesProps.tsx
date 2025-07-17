import React from "react";
import { useNavigate } from "react-router-dom";

type DataProps={
    nombreRol:string;
    setNombreRol:(nombreRol:string)=>{};
    descripcion:string;
    setDescripcion:(descripcion:string)=>{};
}

const Detalles: React.FC<DataProps> = ({nombreRol,setNombreRol,descripcion,setDescripcion}) => {

    const navigate=useNavigate();

     const irVer = () => {
      navigate("/verprops", { state: { nombreRol, descripcion } });
    
     }

  return (
    <div>
      <p>Este es el componente de llenar informacion</p>
      <p>Nombre escrito es: {nombreRol}</p>
      <input type="text" onChange={(event) => setNombreRol(event.target.value)} />
       <p>La descripcion es: {descripcion}</p>
      <input type="text" onChange={(event) => setDescripcion(event.target.value)} />
      <button onClick={irVer}>Ver datos</button>
    </div>
  );
};

export default Detalles;