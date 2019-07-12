import React, { Component } from 'react';
import ListItem from '../Utilities/ListItem/ListItem'
import CrearPropiedad from './CrearGasto'

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

    render() {
        const titulos = ['Concepto','Fecha de Creacion','Costo Total']

        return(
            <div className="admin text-center">
                
                <div className="add-property navy medium mb-3">
                    <span className="title medium mr-2 align-middle">Añadir gasto</span> 
                    <a href="javascript:void(0)"><i className="aquamarine material-icons align-middle" onClick={this.toggle}>add_circle</i></a>
                </div>

                <div className="titulos-servicios bold navy justify-content-around mb-3 ">
                    {titulos.map( (titulo,i) => 
                        <span className="item text-center" key={i}>{titulo}</span>        
                    )} 
                </div>

                {this.props.expenses.map( (expense,i) => 
                    <ListItem title='Gastos' key={i} expense={expense}/>)
                }

                <CrearPropiedad open={this.state.open} toggle={this.state.toggle} ></CrearPropiedad>
            </div>
        );
    }
}