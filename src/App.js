
import {useState} from 'react';
import React from 'react';
import BarraNavegacion from './components/BarraNavegacion/BarraNavegacion.js';
import PaginaInicio from './components/PaginaInicio/PaginaInicio.js';
import SegundaPagina from './components/SegundaPagina/SegundaPagina.js';
import TerceraPagina from './components/TerceraPagina/TerceraPagina.js';
import CuartaPagina from './components/CuartaPagina/CuartaPagina.js';


function App(props){
	let [inicioIsOpen , setInicioIsOpen]= useState(true),
		[segundaPaginaIsOpen , setSegundaPaginaIsOpen]= useState(false),
		[terceraPaginaIsOpen , setTerceraPaginaIsOpen]= useState(false),
		[cuartaPaginaIsOpen , setCuartaPaginaIsOpen]= useState(false);


    function abrirInicio(){
        setInicioIsOpen(true);
		setSegundaPaginaIsOpen(false);
		setTerceraPaginaIsOpen(false);
		setCuartaPaginaIsOpen(false);
    }
	function abrirSegundaPagina(){
		setInicioIsOpen(false);
		setSegundaPaginaIsOpen(true);
		setTerceraPaginaIsOpen(false);
		setCuartaPaginaIsOpen(false);
    }
	function abrirTerceraPagina(){
		setInicioIsOpen(false);
		setSegundaPaginaIsOpen(false);
		setTerceraPaginaIsOpen(true);
		setCuartaPaginaIsOpen(false);
    }
	function abrirCuartaPagina(){
		setInicioIsOpen(false);
		setSegundaPaginaIsOpen(false);
		setTerceraPaginaIsOpen(false);
		setCuartaPaginaIsOpen(true);
	}

	
	return(
		<div className='App'>
			<header className="header">
				<BarraNavegacion onClickUno={abrirInicio} onClickDos={abrirSegundaPagina}
				onClickTres={abrirTerceraPagina} onClickCuatro={abrirCuartaPagina}/>
			</header>
			<main className='contenedor-app'>
				{inicioIsOpen ? <PaginaInicio />:null}
				{segundaPaginaIsOpen ? <SegundaPagina/>:null}
				{terceraPaginaIsOpen ? <TerceraPagina/>:null}
				{cuartaPaginaIsOpen ? <CuartaPagina/>:null}
			</main>
		</div>
  )
  
};

export default App;