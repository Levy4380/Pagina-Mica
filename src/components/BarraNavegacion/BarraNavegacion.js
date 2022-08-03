import React from 'react';
import './BarraNavegacion.css'
import {useState} from 'react';

function BarraNavegacion(props){
    const [inicioWasClicked, setInicioWasClicked] = useState(false);
    const [quienesWasClicked, setQuienesWasClicked] = useState(false);
    const [productosWasClicked, setProductosWasClicked] = useState(false);
    const [contactoWasClicked, setContactoWasClicked] = useState(false);
    function abrirInicio(){
        props.onClickUno();
        setInicioWasClicked(true);
        setQuienesWasClicked(false);
        setProductosWasClicked(false);
        setContactoWasClicked(false);
    }
    function abrirQuienes(){
        props.onClickDos();
        setInicioWasClicked(false);
        setQuienesWasClicked(true);
        setProductosWasClicked(false);
        setContactoWasClicked(false);

    }
    function abrirProductos(){
        props.onClickTres();
        setInicioWasClicked(false);
        setQuienesWasClicked(false);
        setProductosWasClicked(true);
        setContactoWasClicked(false);;
        }
    function abrirContacto(){
        props.onClickCuatro();
        setInicioWasClicked(false);
        setQuienesWasClicked(false);
        setProductosWasClicked(false);
        setContactoWasClicked(true);
    }
    return (
		<nav className="nav">
			<ul className="nav_menu">
				<li className={inicioWasClicked ? "nav_menu_item uno":"nav_menu_item uno"}>
					<button href="#" className="nav_menu_link nav_link" onClick={abrirInicio}>INICIO</button>
				</li>
				<li className={quienesWasClicked ? "nav_menu_item dos nav_menu_link_active":"nav_menu_item dos"}>
					<button href="" className="nav_menu_link nav_link"
				 onClick={abrirQuienes}>¿QUIENES SOMOS?</button>
				</li>
				<li className={productosWasClicked ? "nav_menu_item tres nav_menu_link_active":"nav_menu_item tres"}>
					<button href="" className="nav_menu_link nav_link"
				 onClick={abrirProductos}>PRODUCTOS</button>
				</li>
                <li className={contactoWasClicked ? "nav_menu_item cuatro nav_menu_link_active":"nav_menu_item cuatro"}>
					<button href="" className="nav_menu_link nav_link"
				 onClick={abrirContacto}>CONTACTO</button>
				</li>
			</ul>
      </nav>
    )
}

export default BarraNavegacion;