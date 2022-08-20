import React, {useEffect,useState} from 'react';
import './PaginaInicio.css';
import logo from '../../assets/logo3.jpeg';




function PaginaInicio(props){
    const [isDown,setIsDown]= useState(true);


    function mostrarTexto(){
        setIsDown(false);
        let documento = document.getElementsByClassName('contenedor-texto-inicio');
            documento[0].setAttribute('style', 'visibility:visible')
    }
    function sacarTexto(){
        setIsDown(true);
        let documento = document.getElementsByClassName('contenedor-texto-inicio');
            documento[0].setAttribute('style', 'visibility:hidden')

    }

    useEffect(()=>{
	    document.title='Inicio - Kob et Lys'
	});

    function animate(){
        document.querySelector("picture").animate([
            { transform: 'translateY(-600px)' },
    
          ], {
            // opciones de sincronización
            duration: 900,
            iterations: 1
          }
          );
          mostrarTexto();
          setTimeout(()=>{
            document.querySelector("picture").setAttribute('style','transform:translateY(-600px);z-index:0');
          },900);
               

        };
        function desAnimate(){
            
            document.querySelector("picture").setAttribute('style','transform:translateY(-600px);z-index:1,background:white');
            
            
            document.querySelector("picture").animate([
                { transform: 'translateY(0px)' },
              ], {
                // opciones de sincronización
                duration: 900,
                iterations: 1
              }
              );
              setTimeout(()=>{
                sacarTexto();
                setTimeout(()=>{document.querySelector("picture").setAttribute('style','transform:translateY(0);');},1)
                
              },900);
              
                   
    
            };

    return(
        <div className='contenedor-inicio'>
            <picture className='imagen-inicio'>
                <img src={logo} alt=""/></picture>
            <div className='contenedor-texto-inicio'>
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
            {isDown?
            <button className='down-buton' onClick={()=>{
                animate();
                mostrarTexto();
                }}><span className="fa fa-angle-right"></span></button>
                :null}
            {!isDown?
            <button className='up-buton' onClick={()=>{
                desAnimate();
                
                }}><span className="fa fa-angle-right"></span></button>
                :null}
        </div>
    )
        

};

export default PaginaInicio;



