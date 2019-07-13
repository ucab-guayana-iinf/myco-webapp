import React, { Component } from 'react';
import ListItem from '../Utilities/ListItem/ListItem'
import CrearPropiedad from './CrearPropiedad'

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
        if(this.props.propiedades != ''){
            return(
                <div className="titulos-servicios bold navy justify-content-around mb-3 ">
                    {titulos.map( (titulo,i) => 
                        <span className="item text-center" key={i}>{titulo}</span>        
                    )} 
                </div>
            )
        }else{
            return (
            <div className="medium aquamarine title">
                No se ha registrado ninguna propiedad
            </div>)
        }
    }


    render() {
        const titulos = ['Propiedad','Propietario','Estado de pago']

        return(
            <div className="admin text-center">
                
                <div className="add-property navy medium mb-3">
                    <span className="title medium mr-2 align-middle">Añadir inmueble</span> 
                    <a href="javascript:void(0)"><i className="aquamarine material-icons align-middle" onClick={this.toggle}>add_circle</i></a>
                </div>

                {this.isEmpty(titulos)}

                {this.props.propiedades.map( (propiedad,i) => 
                    <ListItem title={this.props.title} key={i} propiedad={propiedad} />
                )}

                <CrearPropiedad open={this.state.open} toggle={this.toggle} users={this.props.users} propertyTypes={this.props.propertyTypes} />
            </div>
        );
    }
}