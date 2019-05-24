import React, { Component } from 'react';
import MycoCard from '../Utilities/MycoCard/MycoCard';
import './assets/Body.css'

export default class Residencias extends Component {
    


    render() {
        return (    
            <div className="admin text-center">
                <div className="add-property navy medium mb-4">
                    <span className="title medium mr-2 align-middle">Añadir Residencia</span> 
                    <a href="javascript:void(0)"><i className="aquamarine material-icons align-middle">add_circle</i></a>
                </div>
                <div className="fill residencias-body">
                    {this.props.residencias.map( (residencia,i) => 
                            <MycoCard key={i} residencia={residencia}/>
                        )
                    }
                </div>

            </div>
        );
    }
}