import type React from "react";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import DetallesProps from "./DetallesProps";
import { useState } from "react";
import VerProps from "./VerProps";

const App:React.FC=()=>{
  const [nombreRol,setNombreRol,descripcion,setDescripcion]= useState('Usuario')
  return(
       <Router>
      <Routes>
        <Route path='/' element={<DetallesProps nombreRol={nombreRol} setNombreRol={setNombreRol} descripcion={descripcion} setDescripcion={setDescripcion}></DetallesProps>}></Route>
        <Route path='/verprops' element={<VerProps nombreRol={nombreRol} descripcion={descripcion}></VerProps>}></Route>
      </Routes>
    </Router>
  )
}

export default App;
