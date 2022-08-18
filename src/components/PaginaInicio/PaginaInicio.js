import React, {useEffect} from 'react';
import './PaginaInicio.css';
import logo from '../../assets/logo.jpeg';

function PaginaInicio(props){
    useEffect(()=>{
	    document.title='Inicio - Kob et Lys'
	});

    return(
        <div className='contenedor-inicio'>
            <picture className='imagen-inicio'><img src={logo} alt=""/></picture>
        </div>
    )
        

};

export default PaginaInicio;



