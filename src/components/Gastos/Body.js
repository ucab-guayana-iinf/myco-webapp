/* eslint-disable eqeqeq */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import ListItem from '../Utilities/ListItem/ListItem'
import CrearGasto from './CrearGasto'

export default class Body extends Component {

    constructor(props) {
        super(props);
        
        this.state = { 
            open: false
        }
	}
	
	toggle = () => {
		this.setState({
			open: !this.state.open
		});
    }

    isEmpty = (titulos) => {
        if(this.props.expenses != ''){
            return(
                <div className="titulos-servicios bold navy justify-content-around mb-3 ">
                {titulos.map( (titulo,i) => 
                    <span className="item text-center " key={i}>{titulo}</span>        
                )} 
                </div>
            )
        }else {
            return (
            <div className="medium aquamarine title">
                No hay ningun gasto
            </div>)
        }
    }

    render() {
        const titulos = ['Concepto','Propietario','Costo Total']

        return(
            <div className="admin text-center">
                
                <div className="add-property navy medium mb-3">
                    <span className="title medium mr-2 align-middle">Añadir gasto</span> 
                    
                    <a href="javascript:void(0)"><i className="aquamarine material-icons align-middle" onClick={this.toggle}>add_circle</i></a>
                </div>

                {this.isEmpty(titulos)}

                {this.props.expenses.map( (expense,i) => 
                    <ListItem title='Gastos' key={i} expense={expense} />
                )}

                <CrearGasto open={this.state.open} toggle={this.toggle} />
            </div>
        );
    }
}