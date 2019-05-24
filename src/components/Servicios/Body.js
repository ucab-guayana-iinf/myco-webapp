import React, { Component } from 'react';
import ListItem from '../Utilities/ListItem/ListItem'
import '../Servicios/assets/Body.css'

export default class Body extends Component {

    render() {
        const titulos = ['Servicio','Tipo de servicio','Monto mensual']

        return (
            <div className="admin text-center">

                <div className="add-property navy medium mb-4">
                    <span className="title medium mr-2 align-middle">Añadir servicios</span> 
                    <a href="javascript:void(0)"><i className="aquamarine material-icons align-middle">add_circle</i></a>
                </div> 

                <div className="titulos-servicios bold navy d-flex justify-content-around mb-3 ">
                    {titulos.map( (titulo,i) => 
                        <span className="item text-center " key={i}>{titulo}</span>        
                    )} 
                </div>

                {this.props.servicios.map( (servicio,i) => 
                    <ListItem title={this.props.title} key={i} servicios={servicio}/>)
                }  
            
            </div>
        )
    }
}