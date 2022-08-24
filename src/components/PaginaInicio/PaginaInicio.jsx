import React, {useEffect,useState} from 'react';
import './PaginaInicio.css';
import logo from '../../assets/logo3.jpeg';




function PaginaInicio(props){
    const [textIsShowed,setTextIsShowed]= useState(false);
    const [buttonIsShowed, setButtonIsShowed]=useState(false)

    function mostrarTexto(){
        setTextIsShowed(true);
    }
    function sacarTexto(){
        setTextIsShowed(false);
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
            document.querySelector("picture").setAttribute('style','transform:translateY(-600px)');
            setButtonIsShowed(true);
          },850);
               

        };
        function desAnimate(){
            setButtonIsShowed(false);
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
                document.querySelector("picture").setAttribute('style','transform:translateY(0);');
              },880);
            };

    return(
        <div className='contenedor-inicio'>
            <picture className='imagen-inicio'>
                <img src={logo} alt=""/></picture>
                {!textIsShowed ? null:
                <div className='contenedor-texto-inicio'>
                    <div className='texto-inicio'>
                        <h1 className='texto-inicio-titulo'>SOBRE NOSOTROS</h1>
                        <p className='texto-inicio-parrafo'>
                            <b>¡Hola!</b><br/> 
                            Bienvenidos a <b>Kob et Lys</b> y gracias por acompañarnos!<br/>
                            Somos un emprendimiento familiar y queremos brindarte todos los productos para darle un estilo único y personal a tu hogar.<br/>
                            Sabemos que la calidad de vida que te mereces ¡es posible! y por eso hacemos que tu casa trabaje con vos, contamos con productos inteligentes para hacer tu día a día y el de tus afectos más fácil y seguro.<br/>
                            ¡Animate a vivir la experiencia!</p>
                    </div> 
                </div>}
            
            {!buttonIsShowed ?
            <div className='container-down-buton'>
                <button className='down-buton' onClick={()=>{
                    animate();
                    mostrarTexto();
                    }}><span className="fa fa-angle-right"></span>
                </button>
            </div> :null}
            {buttonIsShowed ?  
            <div className='container-up-buton'>
                <button className='up-buton' onClick={()=>{
                    desAnimate();
                    }}><span className="fa fa-angle-right"></span>
                </button>
            </div>:null}
        </div>
    )
        

};

export default PaginaInicio;



