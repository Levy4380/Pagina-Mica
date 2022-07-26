import {useState, useEffect} from 'react';
import BarraNavegacion from './components/BarraNavegacion';
import PrimeraPagina from './components/PrimeraPagina';
import SegundaPagina from './components/SegundaPagina';
import TerceraPagina from './components/TerceraPagina';

function App(props){
	let [primeraPaginaIsOpen , setPrimeraPaginaIsOpen]= useState(true);
	let [segundaPaginaIsOpen , setSegundaPaginaIsOpen]= useState(false);
	let [terceraPaginaIsOpen , setTerceraPaginaIsOpen]= useState(false);

    function abrirPrimeraPagina(){
        setPrimeraPaginaIsOpen(true);
		setSegundaPaginaIsOpen(false);
		setTerceraPaginaIsOpen(false);
    }
	function abrirSegundaPagina(){
		setPrimeraPaginaIsOpen(false);
		setSegundaPaginaIsOpen(true);
		setTerceraPaginaIsOpen(false);
    }
	function abrirTerceraPagina(){
		setPrimeraPaginaIsOpen(false);
		setSegundaPaginaIsOpen(false);
		setTerceraPaginaIsOpen(true);
    }

	
	return(
		<main>
		<BarraNavegacion onClickUno={abrirPrimeraPagina} onClickDos={abrirSegundaPagina}
		onClickTres={abrirTerceraPagina}/>
		{primeraPaginaIsOpen ? <PrimeraPagina/>:null}
		{segundaPaginaIsOpen ? <SegundaPagina/>:null}
		{terceraPaginaIsOpen ? <TerceraPagina/>:null}
		</main>
  )
};

export default App;