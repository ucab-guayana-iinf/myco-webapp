import React, { Component } from 'react';
import ListItem from '../Utilities/ListItem/ListItem'


export default class Body extends Component {

    render() {
        const titulos = ['Propiedad','Propietario','Estado de pago']

        return(
            <div className="admin text-center">
                
                <div className="add-property navy medium mb-3">
                    <span className="title medium mr-2 align-middle">Añadir inmueble</span> 
                    <a href="javascript:void(0)"><i className="aquamarine material-icons align-middle">add_circle</i></a>
                </div>

                <div className="titulos-servicios bold navy justify-content-around mb-3 ">
                    {titulos.map( (titulo,i) => 
                        <span className="item text-center" key={i}>{titulo}</span>        
                    )} 
                </div>

                {this.props.propiedades.map( (propiedad,i) => 
                    <ListItem title={this.props.title} key={i} propiedad={propiedad}/>)
                }
            </div>
        );
    }
}