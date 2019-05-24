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
                    <span className="item text-left">{this.props.propiedad.department_number}</span>
                    <span className="item text-left">{this.props.propiedad.username}</span>
                    <span className="item text-left">{this.props.propiedad.yardage}</span>
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
                return( 
                    <React.Fragment>                    
                        <span className="item text-left">{this.props.servicios.name}</span>
                        <span className="item text-left">{this.props.servicios.type}</span>
                        <span className="item text-left">Bs. {this.props.servicios.price}</span>
                    </React.Fragment>)
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
            <div className="d-flex flex-row">
                <Card className="Litem">
                    <CardBody className="navy d-flex justify-content-around">
                        {this.viewCheck(this.props.title)}
                        <a href="javascript:void(0)"><i className=" expand navy big material-icons align-top">expand_more</i></a>             
                    </CardBody>
                </Card>
                <a href="javascript:void(0)" className="pen-container mx-auto"><i className="pen medium navy material-icons">edit</i></a>
            </div>
        );
    }
}