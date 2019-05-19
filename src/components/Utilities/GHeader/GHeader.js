import React, { Component } from 'react';
import './assets/GHeader.css'
import NavBar from '../NavBar/NavBar'

export default class GHeader extends Component {

    render() {
        return(
            <div>
                <div className="gnav">
                    <NavBar/>
                </div>
                
                <div className="gheader"> 
                    <div className="ground-div">
                        <div className="white text">Residencia  <span className="navy bold">>  {this.props.ruta}</span></div>  
                        <div className="white big title">{this.props.title}</div>
                    </div>
                </div>
            </div>
        )
    }

}