import React from "react";
import {useEffect} from 'react';


function SegundaPagina(){
    useEffect(()=>{
	    document.title='Webpage: Pagina2'
	})

            return(
                <div className='contenedor-segundo'>
                <h1 className='titulo'>Hola soy la pagina 2</h1>
                <p>Hola soy el contenido de la super pagina 2</p>
            </div>
            )
        

};

export default SegundaPagina;
