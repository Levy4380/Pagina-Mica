import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import DomoticaList from'../ProductCard/lista-productos-domotica.json';
import ElectricidadList from'../ProductCard/lista-productos-electricidad.json';
import IluminacionList from'../ProductCard/lista-productos-iluminacion.json';
import './GrillaProductos.css'

function GrillaProductos(props){ 
    let productList;
    productList = (props.category === 'domotica')? DomoticaList : productList;
    productList = (props.category === 'electricidad')? ElectricidadList : productList;
    productList = (props.category === 'iluminacion')? IluminacionList : productList;


    const numberOfProducts = productList.length;
    const array=[]
    function repetirDiv(){
        for (let index = 0; index < numberOfProducts; index++) {
            array.push(<ProductCard key={index} id={index} category={props.category}/>);
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
