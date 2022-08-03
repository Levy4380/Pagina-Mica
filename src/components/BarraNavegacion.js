import React from 'react';
import '../styles/BarraNavegacion.css'
import {useState} from 'react';

function BarraNavegacion(props){
    const [unoIsActive, setUnoIsActive] = useState(false);
    const [dosIsActive, setDosIsActive] = useState(false);
    const [tresIsActive, setTresIsActive] = useState(false);
    const [cuatroIsActive, setCuatroIsActive] = useState(false);
    function abrirPrimeraPagina(){
        props.onClickUno();
        setUnoIsActive(true);
        setDosIsActive(false);
        setTresIsActive(false);
        setCuatroIsActive(false);
    }
    function abrirSegundaPagina(){
        props.onClickDos();
        setUnoIsActive(false);
        setDosIsActive(true);
        setTresIsActive(false);
        setCuatroIsActive(false);

    }
    function abrirTerceraPagina(){
        props.onClickTres();
        setUnoIsActive(false);
        setDosIsActive(false);
        setTresIsActive(true);
        setCuatroIsActive(false);
        }
    function abrirCuartaPagina(){
        props.onClickCuatro();
        setUnoIsActive(false);
        setDosIsActive(false);
        setTresIsActive(false);
        setCuatroIsActive(true);
    }
    return (
		<nav className="nav">
			<ul className="nav_menu">
				<li className={unoIsActive ? "nav_menu_item uno":"nav_menu_item uno"}>
					<button href="#" className="nav_menu_link nav_link" onClick={abrirPrimeraPagina}>Pagina1</button>
				</li>
				<li className={dosIsActive ? "nav_menu_item dos nav_menu_link_active":"nav_menu_item dos"}>
					<button href="" className="nav_menu_link nav_link"
				 onClick={abrirSegundaPagina}>Pagina2</button>
				</li>
				<li className={tresIsActive ? "nav_menu_item tres nav_menu_link_active":"nav_menu_item tres"}>
					<button href="" className="nav_menu_link nav_link"
				 onClick={abrirTerceraPagina}>Pagina3</button>
				</li>
                <li className={cuatroIsActive ? "nav_menu_item cuatro nav_menu_link_active":"nav_menu_item cuatro"}>
					<button href="" className="nav_menu_link nav_link"
				 onClick={abrirCuartaPagina}>Pagina4</button>
				</li>
			</ul>
      </nav>
    )
}

export default BarraNavegacion;