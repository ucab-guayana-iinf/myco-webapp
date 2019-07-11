import React, { Component } from 'react';
import MycoCard from '../Utilities/MycoCard/MycoCard';
import CrearTiposDePropiedad from './CrearTipoDePropiedad'
import './assets/Body.css'

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
        return (    
            <div className="admin text-center">
                <div className="add-property navy medium mb-4">
                    <span className="title medium mr-2 align-middle">Añadir Tipo de Propiedad</span> 
                    <a href="javascript:void(0)"><i 
                    className="aquamarine material-icons align-middle" 
                    onClick={this.toggle}>add_circle</i></a>
                </div>
                <div className="fill residencias-body">
                    {this.props.propertyTypes.map( (propertyType, i) => 
                        <MycoCard key={i} title='Tipos de Propiedades' propertyType={propertyType} />
                    )}
                </div>
                <CrearTiposDePropiedad open={this.state.open} toggle={this.toggle}/>
            </div>
        );
    }
}