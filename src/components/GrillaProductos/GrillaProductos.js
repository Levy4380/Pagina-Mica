import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import DomoticaList from'../ProductCard/lista-productos-domotica.json';
import ElectricidadList from'../ProductCard/lista-productos-electricidad.json';
import IluminacionList from'../ProductCard/lista-productos-iluminacion.json';
import './GrillaProductos.css'

function GrillaProductos(props){ 
    let productList;
    if(props.category === 'domotica'){productList = DomoticaList};
    if(props.category === 'electricidad'){ productList = ElectricidadList};
    if(props.category === 'iluminacion'){productList = IluminacionList};
 


    const numberOfProducts = productList.length;
    const array=[]
    function repetirDiv(){
        for (let i = 0; i < numberOfProducts; i++) {
            array.push(<ProductCard key={i} id={i+1} category={props.category}/>);
            
        }
        return array
    }
    return (
        <div className="grilla">
            <h1>Escoge un producto</h1>
            <div className="contenedor-grilla">
                {repetirDiv()}
            </div>
        </div>
    )  
}
 
 export default GrillaProductos;
