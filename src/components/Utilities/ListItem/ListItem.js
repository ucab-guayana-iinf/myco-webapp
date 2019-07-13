/* eslint-disable no-script-url */
import React, { Component } from 'react';
import { Card, CardBody } from 'shards-react'
import './assets/ListItem.css'

export default class ListItem extends Component {

    constructor(props) {
        super(props);
        this.users = JSON.parse(localStorage.getItem("users"))
    }

    //busca el nombre de un usuario basado en el id     
    buscarNombre = (id) => {
        
        for (let i=0; i<this.users.length; i++ ) {
            if (id == this.users[i].id)
                return this.users[i].name + ' ' + this.users[i].lastname
        }
        return '?'
    }

    //Dependiendo de que vista viene carga distintos componentes de distinta manera
    viewCheck = (title) => {
        switch(title){
            case 'Propiedades': {
                if (this.props.propiedad.yardage){ //aqui lo cambie mientras decidimos lo del estado de pago
                    return( 
                        <Card className=" Litem">
                            <CardBody className="navy d-flex justify-content-around">
                                <span className="item text-left">{this.props.propiedad.department_num}</span>
                                <span className="item text-left">{this.buscarNombre(this.props.propiedad.user_id)}</span>
                                <span className="item text-left">{this.props.propiedad.yardage}</span>
                                <a href="javascript:void(0)"><i className=" expand navy big material-icons align-top">expand_more</i></a>             
                            </CardBody>    
                        </Card>
                    )
                }else {
                    return( 
                        <Card className="deuda Litem">                   
                            <CardBody className=" white d-flex justify-content-around">
                                <span className="item text-left">{this.props.propiedad.department_number}</span>
                                <span className="item text-left">{this.props.propiedad.username}</span>
                                <span className="item text-left">{this.props.propiedad.yardage}</span>
                                <a href="javascript:void(0)"><i className=" expand white big material-icons align-top">expand_more</i></a>             
                            </CardBody>
                        </Card>
                    )         
                }
            }
            case 'Gastos': {
                return(
                    <Card className="Litem">                    
                        <CardBody className="white d-flex justify-content-around">
                            <span className="item navy text-left">{this.props.expense.concept}</span>
                            <span className="item navy text-left">{this.props.expense.creation_date}</span>
                            <span className="item navy text-left">{this.props.expense.amount} Bs.</span>
                            <a href="javascript:void(0)"><i className="navy expand white big material-icons align-top">expand_more</i></a>             
                        </CardBody>
                    </Card>
                )
            }
            case 'Residencias': {
                return <div></div>
            }
            case 'Ingresos y Egresos': {
                return <div></div>
            }
            case 'Cuentas por cobrar': {
                return(<Card className="Litem">                    
                            <CardBody className="navy d-flex justify-content-around">
                                <span className="item text-left">{this.props.cuentasPorCobrar.department_number}</span>
                                <span className="item text-left">{this.props.cuentasPorCobrar.username}</span>
                                <span className="item text-left">{this.props.cuentasPorCobrar.alicuota}</span>
                                <span className="item text-left">Bs. {this.props.cuentasPorCobrar.price}</span>
                                <a href="javascript:void(0)"><i className=" expand navy big material-icons align-top">expand_more</i></a>             
                            </CardBody>
                        </Card>
                )      
            }
            case 'Generar factura': {
                return <div></div>
            }
            case 'Servicios': {
                if(this.props.servicios.type == '0') {
                    return( 
                        <Card className="Litem">                    
                            <CardBody className="navy d-flex justify-content-around">
                                <span className="item text-left">{this.props.servicios.name}</span>
                                <span className="item text-left">Basico</span>
                                <span className="item text-left">Bs. {this.props.servicios.price}</span>
                                <a href="javascript:void(0)"><i className=" expand navy big material-icons align-top">expand_more</i></a>             
                            </CardBody>
                        </Card>
                    )                   
                } else {
                    return( 
                        <Card className="extraO Litem">                    
                            <CardBody className="white d-flex justify-content-around">
                                <span className="item text-left">{this.props.servicios.name}</span>
                                <span className="item text-left">Extraordinario</span>
                                <span className="item text-left">Bs. {this.props.servicios.price}</span>
                                <a href="javascript:void(0)"><i className=" expand white big material-icons align-top">expand_more</i></a>             
                            </CardBody>
                        </Card>
                    )
                }
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
                {this.viewCheck(this.props.title)}
                <a href="javascript:void(0)" className="pen-container mx-auto"><i className="pen medium navy material-icons">edit</i></a>
                <a href="javascript:void(0)" className="pen-container mx-auto"><i className="pen medium navy material-icons">delete</i></a>
            </div>
        );
    }
}