import React from 'react';
import './Categorias.css';


function Categorias(props){
    function restoreScroll() {
        document.documentElement.scrollTop = 0;
    };

    function chooseCategory(){
        if(props.origen ==='domotica'){
            props.choosedDomotica();
        };
        if(props.origen ==='electricidad'){
            props.choosedElectricidad()
        };
        if(props.origen ==='iluminacion'){
            props.choosedIluminacion()
        };
        restoreScroll();
    };
   
    return (
        <div onClick={chooseCategory} className={'categoria ' + props.origen}>
            <div className='contenedor-imagen-categoria' id={props.origen}>
            </div>
            <div className='contenedor-texto'>
                <h1>{props.title}</h1>
                <p>{props.text}</p>
            </div>
        </div>
    )
};

export default Categorias;