/* eslint-disable eqeqeq */
import React, { Component } from 'react';
import ListItem from '../Utilities/ListItem/ListItem'
import './assets/Body.css'

export default class Body extends Component {

    isEmpty = (titulos) => {
        if(this.props.debts != ''){
            return(
                <div className="titulos-cuentas bold navy justify-content-around mb-3 ">
                {titulos.map( (titulo,i) => 
                    <span className="item text-center " key={i}>{titulo}</span>        
                )} 
                </div>
            )
        }else{
            return (
            <div className="medium aquamarine title">
                No hay ninguna cuenta por cobrar
            </div>)
        }
    }

    render() {
        const titulos = ['Propiedad','Propietario','Alicuota','Total a pagar']

        return(
            <div className="admin text-center">
                
                {this.isEmpty(titulos)}
                
                {this.props.debts.map( (debt,i) => 
                    <ListItem title={this.props.title} key={i} debt={debt}/>)
                }
                
            </div>
        );
    }
}