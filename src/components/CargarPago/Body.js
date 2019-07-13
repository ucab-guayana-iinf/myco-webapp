import React, { Component } from 'react';
import ListItem from '../Utilities/ListItem/ListItem'

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
        // eslint-disable-next-line eqeqeq
        if(this.props.payments != ''){
            return(
                <div className="titulos-cargar bold navy justify-content-around mb-3 ">
                {titulos.map( (titulo,i) => 
                    <span className="item text-center " key={i}>{titulo}</span>        
                )} 
                </div>
            )
        }else{
            return (
            <div className="medium aquamarine title">
                No se ha cargado ningun pago
            </div>)
        }
    }

    render() {
        const titulos = ['Descripcion','Numero de Recibo','Fecha de Pago', 'Cantidad']

        return (
            <div className="admin text-center">

                {this.isEmpty(titulos)}

                {this.props.payments.map( (payment,i) => 
                    <ListItem title={this.props.title} key={i} payment={payment}/>)
                }  
            </div>
        )
    }
}