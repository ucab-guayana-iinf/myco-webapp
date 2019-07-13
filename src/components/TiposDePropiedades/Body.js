import React, { Component } from 'react';
import MycoCard from '../Utilities/MycoCard/MycoCard';
import CrearTipoDePropiedad from './CrearTipoDePropiedad'
import EditarTipoDePropiedad from './EditarTipoDePropiedad'
import './assets/Body.css'

export default class Body extends Component {

	constructor(props) {
        super(props);
        
        this.state = { 
            open: false, //para modal de crear tipo de propiedad
            open2: false //para modal de editar tipo de propiedad
        }

        this.idTipoDePropiedad = 0
	}

	toggle = () => {
		this.setState({
			open: !this.state.open
		});
    }

    //para abrir el modal de editar tipo de propiedad (se llama desde mycoCard y recibe el id del tipo de propiedad elegido)
    toggle2 = (id) => {
        this.idTipoDePropiedad = id
        this.setState({
            open2: !this.state.open2
        });
    }


    isEmpty = (titulos) => {
        const propertyTypes = this.props.propertyTypes
        if( propertyTypes != ''){
            return(
                <div className="fill residencias-body">
                    {this.props.propertyTypes.map( (propertyType, i) => 
                        <MycoCard key={i} title='Tipos de Propiedades' propertyType={propertyType} toggle2={this.toggle2} />
                    )}
                </div>
            )
        }else{
            return (
                <div className="medium aquamarine title">
                    No se ha creado ningun tipo de residencia
                </div>
            )
        }
    }

    render() {
        return (    
            <div className="admin text-center">
                <div className="add-property navy medium mb-4">
                    <span className="title medium mr-2 align-middle">Añadir Tipo de Propiedad</span> 
                    <a href="javascript:void(0)"><i 
                    className="aquamarine material-icons align-middle" 
                    onClick={this.toggle}>add_circle</i></a>
                </div>
                {this.isEmpty(this.titulos)}
                <CrearTipoDePropiedad open={this.state.open} toggle={this.toggle} />
                <EditarTipoDePropiedad open={this.state.open2} toggle={this.toggle2} id={this.idTipoDePropiedad}/>
            </div>
        );
    }
}