import React from "react";
import DomoticaList from'./lista-productos-domotica.json';
import ElectricidadList from'./lista-productos-electricidad.json';
import IluminacionList from'./lista-productos-iluminacion.json';
import './ProductCard.css';

function ProductCard(props){
    
    let productList;
    {(props.category === 'domotica')? productList = DomoticaList : productList = productList};
    {(props.category === 'electricidad')? productList = ElectricidadList: productList = productList};
    {(props.category === 'iluminacion')? productList = IluminacionList: productList = productList};
 

    productList.map((info)=>{
           return( 
            {
                nombreProducto:info.nombreProducto,
                marca:info.marca
        })
    });
    const product= productList[props.id-1];

    return (
            <div className="producto" onClick={()=>{alert('hola')}}>
                <div className="imagen-producto"></div>
                <div className="texto-producto">
                    <h1>{product.nombreProducto}</h1>
                    <h2>{product.marca}</h2>
                </div>
          
            </div>
        )
        
 }
 
 export default ProductCard;
