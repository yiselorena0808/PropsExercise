import React from "react";
import Detalles from "./DetallesProps";

const VerProps:React.FC<{nombreRol:string,descripcion:string}>=({nombreRol,descripcion})=>{
    return(
        <div>
            <p>Aqui puedes ver tu rol: {nombreRol}</p>
            <p>Aqui puedes ver tu descripcion: {descripcion}</p>
        </div>
    )
}
export default VerProps;