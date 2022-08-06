import React, { useState , useEffect} from "react";
import './PaginaProductos.css'
import SelectorCategorias from "../SelectorCategorias/SelectorCategorias";
import GrillaProductos from "../GrillaProductos/GrillaProductos";
import InfoProducto from "../ProductCard/ProductCard";


function PaginaProductos(){
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
    }
    function openElectricidad(){
        setElectricidadIsOpen(true);
    }
    function openIluminacion(){
        setIluminacionIsOpen(true);
    }

    return(
        <div className="pagina-productos">
            {selectorIsVisible ? null: <button className="back-button" 
                href='#'
                onClick={openSelector}>Volver atras</button>}
           
            {selectorIsVisible ? <SelectorCategorias 
                closeSelector={closeSelector}
                openDomotica={openDomotica}
                openElectricidad={openElectricidad}
                openIluminacion={openIluminacion}/> :null}
            {domoticaIsOpen ? <GrillaProductos category='domotica'/>:null}
            {electricidadIsOpen ? <GrillaProductos category='electricidad'/>:null}
            {iluminacionIsOpen ? <GrillaProductos category='iluminacion'/>:null}

        </div>
)

};

export default PaginaProductos;