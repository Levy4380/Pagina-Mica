import React from 'react';
import './BarraNavegacion.css'
import {useState} from 'react';

function BarraNavegacion(props){
    const [inicioWasClicked, setInicioWasClicked] = useState(false);
    const [quienesWasClicked, setQuienesWasClicked] = useState(false);
    const [productosWasClicked, setProductosWasClicked] = useState(false);
    const [contactoWasClicked, setContactoWasClicked] = useState(false);
    function clickInicioHadnler(){
        props.onClickInicio();
        setInicioWasClicked(true);
        setQuienesWasClicked(false);
        setProductosWasClicked(false);
        setContactoWasClicked(false);
    }
    function clickQuienesHandler(){
        props.onClickDos();
        setInicioWasClicked(false);
        setQuienesWasClicked(true);
        setProductosWasClicked(false);
        setContactoWasClicked(false);

    }
    function clickProductosHandler(){
        props.onClickProductos();
        setInicioWasClicked(false);
        setQuienesWasClicked(false);
        setProductosWasClicked(true);
        setContactoWasClicked(false);;
        }
    function clickContactoHandler(){
        props.onClickCuatro();
        setInicioWasClicked(false);
        setQuienesWasClicked(false);
        setProductosWasClicked(false);
        setContactoWasClicked(true);
    }
    return (
		<nav className="barra-navegacion">
			<ul className="barra-contenedor-botones">
				<li className={inicioWasClicked ? "barra-contenedor-boton uno":"barra-contenedor-boton uno"}>
					<button href="#" className="barra-contenido-boton" onClick={clickInicioHadnler}>INICIO</button>
				</li>
				<li className={quienesWasClicked ? "barra-contenedor-boton dos barra-active":"barra-contenedor-boton dos"}>
					<button href="" className="barra-contenido-boton"
				 onClick={clickQuienesHandler}>SOBRE NOSOTROS</button>
				</li>
				<li className={productosWasClicked ? "barra-contenedor-boton tres barra-active":"barra-contenedor-boton tres"}>
					<button href="" className="barra-contenido-boton"
				 onClick={clickProductosHandler}>PRODUCTOS</button>
				</li>
                <li className={contactoWasClicked ? "barra-contenedor-boton cuatro barra-active":"barra-contenedor-boton cuatro"}>
					<button href="" className="barra-contenido-boton"
				 onClick={clickContactoHandler}>CONTACTO</button>
				</li>
			</ul>
      </nav>
    )
}

export default BarraNavegacion;