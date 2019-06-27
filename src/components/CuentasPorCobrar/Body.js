import React, { Component } from 'react';
import ListItem from '../Utilities/ListItem/ListItem'
import './assets/Body.css'

export default class Body extends Component {

    render() {
        const titulos = ['Propiedad','Propietario','Alicuota','Total a pagar']

        return(
            <div className="admin text-center">
                
                <div className="titulos-cuentas bold navy justify-content-around mb-3 ml-5">
                    {titulos.map( (titulo,i) => 
                        <span className="item text-left " key={i}>{titulo}</span>        
                    )} 
                </div>
                
                {this.props.cuentasPorCobrar.map( (cuenta,i) => 
                    <ListItem title={this.props.title} key={i} cuentasPorCobrar={cuenta}/>)
                }
                
            </div>
        );
    }
}