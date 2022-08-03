import React from "react";
import {useEffect} from 'react';


function CuartaPagina(){
    useEffect(()=>{
	    document.title='Webpage: Pagina4'
	})

            return(
                <div className='contenedor-cuarta'>
                <h1 className='titulo'>Hola soy la pagina 4</h1>
                <p>Hola soy el contenido de la super pagina 4</p>
            </div>
            )
        

};

export default CuartaPagina;