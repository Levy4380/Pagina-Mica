import {useEffect} from 'react';
import React from 'react';
import '../styles/PrimeraPagina.css';

function PrimeraPagina(){
    useEffect(()=>{
	    document.title='Webpage'
	})

    return(
        <div className='contenedor-primero'>
            <picture><img src="https://4bef2b87b8.clvaw-cdnwnd.com/8f960d9eeab3b069a056c993f8ae5fac/200000004-a1ad0a1ad2/image-crop-200000000-0.jpeg?ph=4bef2b87b8" width="1478" height="894" alt=""/></picture>
            <h1 className='titulo'>Hola soy la pagina 1</h1>
            <p>Hola soy el contenido de la super pagina 1</p>
        </div>
    )
        

};

export default PrimeraPagina;



