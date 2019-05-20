/* eslint-disable no-script-url */
import React, { Component } from 'react';
import { Card, CardBody } from 'shards-react'
import './assets/ListItem.css'

export default class ListItem extends Component {

    
    constructor(props) {
        super(props);

        this.viewCheck = this.viewCheck;
    }

    //Dependiendo de que vista viene carga distintos componentes de distinta manera

    viewCheck = (title) => {
        switch(title){
            case 'Propiedades': {
                return( 
                <React.Fragment>                    
                    <span>{this.props.propiedad.department_number}</span>
                    <span>{this.props.propiedad.username}</span>
                    <span>{this.props.propiedad.yardage}</span>
                </React.Fragment>)
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
        return(
            <Card className="Litem">
                <CardBody className="navy d-flex justify-content-around">
                    {this.viewCheck(this.props.title)}
                    <a href="javascript:void(0)"><i className="navy big material-icons align-top">expand_more</i></a>
                </CardBody>
            </Card>
        );
    }
}