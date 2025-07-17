import React from "react";
import DetallesProps from "./DetallesProps";

const VerProps:React.FC<{nombreRol:string,descripcion:string}>=({nombreRol,descripcion})=>{
    return(
        <div>
            <p>Aqui puedes ver tu rol</p>
            <p>{nombreRol}</p>
            <p>Aqui puedes ver tu descripcion</p>
            <p>{descripcion}</p>
        </div>
    )
}
export default VerProps;