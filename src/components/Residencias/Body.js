import React, { Component } from 'react';
import MycoCard from '../Utilities/MycoCard/MycoCard';
import CrearResidencia from './CrearResidencia'
import './assets/Body.css'

export default class Residencias extends Component {
    
	constructor(props) {
        super(props);
        
        this.state = { 
            open: false,
            nroPropiedades: [],
            propiedadesCargadas: false
        }
	}
	
	toggle = () => {
		this.setState({
			open: !this.state.open
		});
    }

    buscarPropiedades = () => {
        //ciclo para buscar el nro de propiedades de todas las residencias del admin
        for (let i=0; i<this.props.residencias.length; i++) {
            let query = this.props.residencias[i].id
            
            fetch(`https://myco-backend.herokuapp.com/residency/properties?residency_id=${encodeURIComponent(query)}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + localStorage.getItem("token")
            }
            })
		    .then(res => res.json())
		    .then(res => {
                this.setState({ //se agrega el numero de propiedades de la residencia actual al array
                    nroPropiedades: [...this.state.nroPropiedades, res.properties.length],
                    propiedadesCargadas: true
                })
            })
        .catch(error => console.error('Hubo un error cargando las propiedades para las residencias:', error))
        }
    }

    isEmpty = (titulos) => {
        const residencias = this.props.residencias
        if( residencias != ''){
            return(
                <div className="fill residencias-body">
                    {residencias.map( (residencia, i) => 
                        <MycoCard key={i} title='Residencias' residencia={residencia} nroPropiedades={this.state.nroPropiedades} index={i}/>
                    )}
                </div>
            )
        }else{
            return (
                <div className="medium aquamarine title">
                    No existen residencias creadas
                </div>
            )
        }
    }

    render() {
        return (    
            <div className="admin text-center">
                <div className="add-property navy medium mb-4">
                    <span className="title medium mr-2 align-middle">Añadir Residencia</span> 
                    <a href="javascript:void(0)"><i 
                    className="aquamarine material-icons align-middle" 
                    onClick={this.toggle}>add_circle</i></a>
                </div>
                {this.state.propiedadesCargadas? null : this.buscarPropiedades()}
                {this.isEmpty(this.titulo)}

                <CrearResidencia open={this.state.open} toggle={this.toggle}/>
            </div>
        );
    }
}