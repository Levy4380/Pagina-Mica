import React, {useEffect,useState} from 'react';
import './PaginaInicio.css';
import logo from '../../assets/logo3.jpeg';




function PaginaInicio(props){
    const [isDown,setIsDown]= useState(true);


    function mostrarTexto(){
        setIsDown(false);
    }

    useEffect(()=>{
	    document.title='Inicio - Kob et Lys'
	});

    function animate(){
        document.querySelector("picture").animate([
            { transform: 'translateY(-1000px)' }

          ], {
            // opciones de sincronización
            duration: 2000,
            iterations: 1
          }
          );
          mostrarTexto();
          setTimeout(()=>{
            document.querySelector('img').setAttribute('style','position:absolute;left:0;top:-1000px');
          },2000);
               

        };

    return(
        <div className='contenedor-inicio'>
            <picture className='imagen-inicio'>
            {/* <span></span> */}
                <img src={logo} alt=""/></picture>
            <div className='contenedor-segundo'>
                {!isDown ?
                <div className='texto-inicio'>
                    <h1 className='texto-inicio-titulo'>SOBRE NOSOTROS</h1>
                    <p className='texto-inicio-parrafo'>¡Hola!<br/>
                        Bienvenidos a Kob et Lys y gracias por acompañarnos!<br/>
                        Somos un emprendimiento familiar y queremos brindarte todos los productos para darle un estilo único y personal a tu hogar.<br/>
                        Sabemos que la calidad de vida que te mereces ¡es posible! y por eso hacemos que tu casa trabaje con vos, contamos con productos inteligentes para hacer tu día a día y el de tus afectos más fácil y seguro.<br/>
                        ¡Animate a vivir la experiencia!</p>
                </div> 
                :null}
            </div>
            <button className='down-buton' onClick={()=>{
                animate();
                mostrarTexto();
                }}>abajo</button>
        </div>
    )
        

};

export default PaginaInicio;



