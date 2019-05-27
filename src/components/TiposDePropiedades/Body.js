import React, { Component } from 'react';
import MycoCard from '../Utilities/MycoCard/MycoCard';
import './assets/Body.css'

export default class TiposDePropiedades extends Component {
    


    render() {
        return (    
            <div className="admin text-center">
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