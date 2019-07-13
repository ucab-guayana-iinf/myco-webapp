import React, { Component } from 'react';
import ListItem from '../Utilities/ListItem/ListItem'
import '../Servicios/assets/Body.css'
import CrearServicio from './CrearServicio';

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
        if(this.props.servicios != ''){
            return(
                <div className="titulos-servicios bold navy justify-content-around mb-3 ">
                {titulos.map( (titulo,i) => 
                    <span className="item text-center " key={i}>{titulo}</span>        
                )} 
                </div>
            )
        }else{
            return (
            <div className="big navy title">
                No existen servicios registrados en esta residencia
            </div>)
        }
    }

    render() {
        const titulos = ['Servicio','Tipo de servicio','Monto mensual']

        return (
            <div className="admin text-center">

                <div className="add-property navy medium mb-3">
                    <span className="title medium mr-2 align-middle">Añadir servicios</span> 
                    <a href="javascript:void(0)"><i className="aquamarine material-icons align-middle" 
                    onClick={this.toggle}>add_circle</i></a>
                </div> 

                {this.isEmpty(titulos)}

                {this.props.servicios.map( (servicio,i) => 
                    <ListItem title={this.props.title} key={i} servicios={servicio}/>)
                }  
                <CrearServicio open={this.state.open} toggle={this.toggle} />
            </div>
        )
    }
}