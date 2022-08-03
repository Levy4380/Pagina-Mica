import React from "react";
import {useEffect} from 'react';

function TerceraPagina(){
    useEffect(()=>{
	    document.title='Webpage: Pagina3'
	})

    return(
        <div className='contenedor-tercero'>
        <h1 className='titulo'>Hola soy la pagina 3</h1>
        <p>Hola soy el contenido de la super pagina 3</p>
    </div>
    )


};

export default TerceraPagina;