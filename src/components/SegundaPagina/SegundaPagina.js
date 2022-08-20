import React from "react";
import {useEffect} from 'react';
import '../SegundaPagina/SegundaPagina.css';

function SegundaPagina(){
    useEffect(()=>{
	    document.title='Webpage: Pagina2'
	})

            return(
                <div className='contenedor-segundo'>
                    <div className='texto-inicio'>
                        <h1 className='texto-inicio-titulo'>SOBRE NOSOTROS</h1>
                        <p className='texto-inicio-parrafo'>¡Hola!<br/>
                            Bienvenidos a Kob et Lys y gracias por acompañarnos!<br/>
                            Somos un emprendimiento familiar y queremos brindarte todos los productos para darle un estilo único y personal a tu hogar.<br/>
                            Sabemos que la calidad de vida que te mereces ¡es posible! y por eso hacemos que tu casa trabaje con vos, contamos con productos inteligentes para hacer tu día a día y el de tus afectos más fácil y seguro.<br/>
                            ¡Animate a vivir la experiencia!</p>
                    </div>
                </div>
            )
        

};

export default SegundaPagina;
