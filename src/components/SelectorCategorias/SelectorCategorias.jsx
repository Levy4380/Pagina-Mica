import React from "react";
import Categorias from "../Categorias/Categorias.jsx";
import './SelectorCategorias.css';

function SelectorCategorias(props){
    

    return(
    <div className="selector-categorias">
            <h1 className="titulo-categorias">Escoge una categoria</h1>
            <div className='contenedor-categorias'>
                <Categorias 
                    choosedDomotica={()=>{
                        props.closeSelector();
                        props.openDomotica();
                    }} 
                    origen='domotica' title='Domotica' 
                    text='Viví la experiencia de automatizar tu casa. Encontrá en esta sección los productos de domotica.'
                    />
                <Categorias 
                    choosedElectricidad={()=>{
                        props.closeSelector();
                        props.openElectricidad();
                    }}
                    origen='electricidad'
                    title='Electricidad' 
                    text='Encontrá aquí algunos cables que te ayudarán a utilizar tus productos domóticos y de iluminación.'
                />
                <Categorias 
                    choosedIluminacion={()=>{
                        props.closeSelector();
                        props.openIluminacion();
                    }}
                    origen='iluminacion' 
                    title='Iluminacion' 
                    text='Dale un estilo único y personal a la iluminación de tu hogar. Encontrá aquí los productos de iluminación.'
                />
            </div>
        </div>
    )
};

export default SelectorCategorias;