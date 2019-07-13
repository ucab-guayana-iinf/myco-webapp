import React, { Component } from 'react';
import MycoCard from '../Utilities/MycoCard/MycoCard';
import CrearResidencia from './CrearResidencia'
import './assets/Body.css'

export default class Residencias extends Component {
    
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
        const residencias = this.props.residencias
        if( residencias != ''){
            return(
                <div className="fill residencias-body">
                    {residencias.map( (residencia, i) => 
                        <MycoCard key={i} title='Residencias' residencia={residencia} />
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
                {this.isEmpty(this.titulo)}

                <CrearResidencia open={this.state.open} toggle={this.toggle}/>
            </div>
        );
    }
}