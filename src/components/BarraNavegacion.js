import '../styles/BarraNavegacion.css'

function BarraNavegacion(props){
    function abrirPrimeraPagina(){
        props.onClickUno();
    }
    function abrirSegundaPagina(){
        props.onClickDos();
    }
    function abrirTerceraPagina(){
        props.onClickTres();
    }
    return (
    <header className="header">
		<nav className="nav">
			<ul className="nav_menu">
				<li className="nav_menu_item">
					<button href="#" className="nav_menu_link nav_link" onClick={abrirPrimeraPagina}>Pagina1</button>
				</li>
				<li className="nav_menu_item">
					<button href="" className="nav_menu_link nav_link"
				 onClick={abrirSegundaPagina}>Pagina2</button>
				</li>
				<li className="nav_menu_item">
					<button href="" className="nav_menu_link nav_link"
				 onClick={abrirTerceraPagina}>Pagina3</button>
				</li>
			</ul>
      </nav>
    </header>
    )
}

export default BarraNavegacion;