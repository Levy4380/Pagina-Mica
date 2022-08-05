import React, { useState , useEffect} from "react";

import './TerceraPagina.css'
import SelectorCategorias from "../SelectorCategorias/SelectorCategorias";


function TerceraPagina(){
    useEffect(()=>{
	    document.title='Productos - Kob et Lys'
	});
    const [selectorIsVisible,setSelectorIsVisible]=useState(true);
    const [domoticaIsOpen,setDomoticaIsOpen]= useState(false);
    const [electricidadIsOpen,setElectricidadIsOpen]= useState(false);
    const [iluminacionIsOpen,setIluminacionIsOpen]= useState(false);

    function closeSelector(){
        setSelectorIsVisible(false);
    }
    function openSelector(){
        setSelectorIsVisible(true);
        setDomoticaIsOpen(false);
        setElectricidadIsOpen(false);
        setIluminacionIsOpen(false);
    }
    function openDomotica(){
        setDomoticaIsOpen(true);
        console.log('hola')
    }
    function openElectricidad(){
        setElectricidadIsOpen(true);
    }
    function openIluminacion(){
        setIluminacionIsOpen(true);
    }

    return(
        <div className="pagina-productos">
            {selectorIsVisible ? null: <button 
                href='#'
                style={{
                    position: 'absolute' ,
                    marginTop:50 +'px',
                    left:100,
                    cursor:'pointer'
                }}
                onClick={openSelector}>Volver atras</button>}
           
            {selectorIsVisible ? <SelectorCategorias 
                closeSelector={closeSelector}
                openDomotica={openDomotica}
                openElectricidad={openElectricidad}
                openIluminacion={openIluminacion}/> :null}
            {domoticaIsOpen ? <h1>Domotica</h1>:null}
            {electricidadIsOpen ? <h1>Electricidad</h1>:null}
            {iluminacionIsOpen ? <h1>Iluminacion</h1>:null}

        </div>
)

};

export default TerceraPagina;