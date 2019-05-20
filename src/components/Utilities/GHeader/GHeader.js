import React, { Component } from 'react';
import './assets/GHeader.css'
import NavBar from '../NavBar/NavBar'

export default class GHeader extends Component {

    constructor(props) {
        super(props);

        this.viewCheck = this.viewCheck;
    }

    //Dependiendo de que vista viene carga distintos componentes de distinta manera

    viewCheck = (title) => {
        switch(title){
            case 'Propiedades': {
                return (
                    <React.Fragment>
                        <div className="white text-center mt-n3">
                            <div className="mb-n3 mt-n4">
                                <span className="navy medium title">{this.props.propiedades}</span> propiedades <span>&nbsp;&nbsp;</span>
                                <span className="navy medium title">{this.props.propietarios}</span> propietarios
                                <br/>
                            </div>
                            <span className="navy medium title"> {this.props.endeudados} </span> <span className="white"> propietarios en mora</span>
                        </div>
                    </React.Fragment>
                        )
            }
            case 'Residencias': {
                return <div></div>
            }
            case 'Contabilidad': {
                return <div></div>
            }
            case 'Cuentas por cobrar': {
                return <div></div>
            }
            case 'Generar factura': {
                return <div></div>
            }
            case 'Servicios': {
                return <div></div>
            }
            case 'Tipos de propiedades': {
                return <div></div>
            }
            case 'Cargar pago': {
                return <div></div>
            }
            default:{
                break;
            }
        }
    }

    render() {
        const {title} = this.props;

        return(
            <React.Fragment>
                <div className="gnav">
                    <NavBar/>
                </div>
                
                <div className="gheader"> 
                    <div className="ground-div">
                        <div className="white text">Residencia  <span className="navy bold">>  {title}</span></div>  
                        <div className="white big title">{title}</div>
                        {this.viewCheck(title)}
                    </div>
                </div>
            </React.Fragment>
        )
    }

}