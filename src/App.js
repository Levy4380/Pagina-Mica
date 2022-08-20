
import {useState} from 'react';
import React from 'react';
import BarraNavegacion from './components/BarraNavegacion/BarraNavegacion.js';
import PaginaInicio from './components/PaginaInicio/PaginaInicio.js';
import SegundaPagina from './components/SegundaPagina/SegundaPagina.js';
import PaginaProductos from './components/PaginaProductos/PaginaProductos.jsx';
import CuartaPagina from './components/CuartaPagina/CuartaPagina.js';



function App(props){
	let [paginaInicioIsOpen , setPaginaInicioIsOpen]= useState(true),
		[segundaPaginaIsOpen , setSegundaPaginaIsOpen]= useState(false),
		[paginaProductosIsOpen , setPaginaProductosIsOpen]= useState(false),
		[cuartaPaginaIsOpen , setCuartaPaginaIsOpen]= useState(false);


    function openPaginaInicio(){
        setPaginaInicioIsOpen(true);
		setSegundaPaginaIsOpen(false);
		setPaginaProductosIsOpen(false);
		setCuartaPaginaIsOpen(false);
    }
	function openSegundaPagina(){
		setPaginaInicioIsOpen(false);
		setSegundaPaginaIsOpen(true);
		setPaginaProductosIsOpen(false);
		setCuartaPaginaIsOpen(false);
    }
	function openPaginaProductos(){
		setPaginaInicioIsOpen(false);
		setSegundaPaginaIsOpen(false);
		setPaginaProductosIsOpen(true);
		setCuartaPaginaIsOpen(false);
    }
	function openCuartaPagina(){
		setPaginaInicioIsOpen(false);
		setSegundaPaginaIsOpen(false);
		setPaginaProductosIsOpen(false);
		setCuartaPaginaIsOpen(true);
	}

	
	return(
		<div className='App'>
			<header className="header">
				<BarraNavegacion onClickInicio={openPaginaInicio} onClickDos={openSegundaPagina}
				onClickProductos={openPaginaProductos} onClickCuatro={openCuartaPagina}/>
			</header>
			<React.StrictMode>
			<main className='contenedor-app'>
				{paginaInicioIsOpen ? <PaginaInicio />:null}
				{segundaPaginaIsOpen ? <SegundaPagina/>:null}
				{paginaProductosIsOpen ? <PaginaProductos/>:null}
				{cuartaPaginaIsOpen ? <CuartaPagina/>:null}
			</main>
			</React.StrictMode>
		</div>
  )
  
};

export default App;