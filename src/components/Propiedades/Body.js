import React, { Component } from 'react';
import ListItem from '../Utilities/ListItem/ListItem'


export default class Body extends Component {

    render() {
        return(
            <div className="admin text-center">

                <div className="add-property navy medium mb-4">
                    <span className="title medium mr-2 align-middle">Añadir propiedad</span> 
                    <a href="javascript:void(0)"><i className="aquamarine material-icons align-middle">add_circle</i></a>
                </div>

                {this.props.propiedades.map( (propiedad,i) => 
                    <ListItem title={this.props.title} key={i} propiedad={propiedad}/>)
                }
            </div>
        );
    }
}