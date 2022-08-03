import {useState} from 'react';
import React from 'react';
import BarraNavegacion from './components/BarraNavegacion';
import PrimeraPagina from './components/PrimeraPagina';
import SegundaPagina from './components/SegundaPagina';
import TerceraPagina from './components/TerceraPagina';
import CuartaPagina from './components/CuartaPagina';

function App(props){
	let [primeraPaginaIsOpen , setPrimeraPaginaIsOpen]= useState(true);
	let [segundaPaginaIsOpen , setSegundaPaginaIsOpen]= useState(false);
	let [terceraPaginaIsOpen , setTerceraPaginaIsOpen]= useState(false);
	let [cuartaPaginaIsOpen , setCuartaPaginaIsOpen]= useState(false);


    function abrirPrimeraPagina(){
        setPrimeraPaginaIsOpen(true);
		setSegundaPaginaIsOpen(false);
		setTerceraPaginaIsOpen(false);
		setCuartaPaginaIsOpen(false);
    }
	function abrirSegundaPagina(){
		setPrimeraPaginaIsOpen(false);
		setSegundaPaginaIsOpen(true);
		setTerceraPaginaIsOpen(false);
		setCuartaPaginaIsOpen(false);
    }
	function abrirTerceraPagina(){
		setPrimeraPaginaIsOpen(false);
		setSegundaPaginaIsOpen(false);
		setTerceraPaginaIsOpen(true);
		setCuartaPaginaIsOpen(false);
    }
	function abrirCuartaPagina(){
		setPrimeraPaginaIsOpen(false);
		setSegundaPaginaIsOpen(false);
		setTerceraPaginaIsOpen(false);
		setCuartaPaginaIsOpen(true);
	}
	
	return(
		<div>
			<header className="header">
				<BarraNavegacion onClickUno={abrirPrimeraPagina} onClickDos={abrirSegundaPagina}
				onClickTres={abrirTerceraPagina} onClickCuatro={abrirCuartaPagina}/>
			</header>
			<main className='contenedor-app'>
				{primeraPaginaIsOpen ? <PrimeraPagina/>:null}
				{segundaPaginaIsOpen ? <SegundaPagina/>:null}
				{terceraPaginaIsOpen ? <TerceraPagina/>:null}
				{cuartaPaginaIsOpen ? <CuartaPagina/>:null}
			</main>
		</div>
  )
};

export default App;