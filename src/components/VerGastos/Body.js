import React, { Component } from 'react';
import ListItem from '../Utilities/ListItem/ListItem'

export default class Body extends Component {


    isEmpty = (titulos) => {
        if(this.props.expenses != ''){
            return(
                <div className="titulos-servicios bold navy justify-content-around mb-3 ">
                {titulos.map( (titulo,i) => 
                    <span className="item text-center " key={i}>{titulo}</span>        
                )} 
                </div>
            )
        }else{
            return (
            <div className="medium aquamarine title">
                No cuentas con ningun gasto
            </div>)
        }
    }

    render() {
        const titulos = ['Descripcion','Fecha','Monto']

        return (    
            <div className="admin text-center">
                {this.isEmpty(titulos)}

                {this.props.expenses.map( (expense,i) => 
                    <ListItem title={this.props.title} key={i} expense={expense}/>)
                }  
            </div>
        );
    }
}