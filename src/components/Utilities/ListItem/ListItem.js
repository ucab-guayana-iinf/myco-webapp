/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React, { Component } from 'react';
import { Card, CardBody } from 'shards-react'
import './assets/ListItem.css'

export default class ListItem extends Component {

    //Dependiendo de que vista viene carga distintos componentes de distinta manera
    viewCheck = (title) => {
        switch(title){
            case 'Propiedades': {
                if (this.props.propiedad.yardage === 'Pagado'){
                    return( 
                        <div className="d-flex flex-row">
                            <Card className=" Litem">
                                <CardBody className="navy d-flex justify-content-around">
                                    <span className="item text-left">{this.props.propiedad.department_number}</span>
                                    <span className="item text-left">{this.props.propiedad.username}</span>
                                    <span className="item text-left">{this.props.propiedad.yardage}</span>
                                    <a href="javascript:void(0)"><i className=" expand navy big material-icons align-top">expand_more</i></a>             
                                </CardBody>    
                            </Card>
                            <a href="javascript:void(0)" className="pen-container mx-auto"><i className="pen medium navy material-icons">edit</i></a>
                            <a href="javascript:void(0)" className="pen-container mx-auto"><i className="pen medium navy material-icons">delete</i></a>
                        </div>

                    )
                }else {
                    return( 
                        <div className="d-flex flex-row">
                            <Card className="deuda Litem">                   
                                <CardBody className=" white d-flex justify-content-around">
                                    <span className="item text-left">{this.props.propiedad.department_number}</span>
                                    <span className="item text-left">{this.props.propiedad.username}</span>
                                    <span className="item text-left">{this.props.propiedad.yardage}</span>
                                    <a href="javascript:void(0)"><i className=" expand white big material-icons align-top">expand_more</i></a>             
                                </CardBody>
                            </Card>
                            <a href="javascript:void(0)" className="pen-container mx-auto"><i className="pen medium navy material-icons">edit</i></a>
                            <a href="javascript:void(0)" className="pen-container mx-auto"><i className="pen medium navy material-icons">delete</i></a>
                        </div>
                    )         
                }
            }
            case 'Gastos': {
                return(
                    <div className="d-flex flex-row">
                        <Card className="Litem">                    
                            <CardBody className="white d-flex justify-content-around">
                                <span className="item navy text-left">{this.props.expense.concept}</span>
                                <span className="item navy text-left">{this.props.expense.creation_date}</span>
                                <span className="item navy text-left">{this.props.expense.amount} Bs.</span>
                                <a href="javascript:void(0)"><i className="navy expand white big material-icons align-top">expand_more</i></a>             
                            </CardBody>
                        </Card>
                        <a href="javascript:void(0)" className="pen-container mx-auto"><i className="pen medium navy material-icons">edit</i></a>
                        <a href="javascript:void(0)" className="pen-container mx-auto"><i className="pen medium navy material-icons">delete</i></a>
                    </div>
                )
            }
            case 'Cuentas por cobrar': {
                return(
                    <div className="d-flex flex-row">
                        <Card className="Litem">                    
                            <CardBody className="navy d-flex justify-content-around">
                                <span className="item text-left">{this.props.debt.property_id}</span>
                                <span className="item text-left">{this.props.debt.description}</span>
                                <span className="item text-left">{this.props.debt.creation_date}</span>
                                <span className="item text-left">Bs. {this.props.debt.amount}</span>
                                <a href="javascript:void(0)"><i className=" expand navy big material-icons align-top">expand_more</i></a>             
                            </CardBody>
                        </Card>
                        <a href="javascript:void(0)" className="pen-container mx-auto"><i className="pen medium navy material-icons">edit</i></a>
                        <a href="javascript:void(0)" className="pen-container mx-auto"><i className="pen medium navy material-icons">delete</i></a>
                    </div>
                )      
            }
            case 'Generar factura': {
                return <div></div>
            }
            case 'Servicios': {
                if(this.props.servicios.type == '0') {
                    return( 
                        <div className="d-flex flex-row">
                            <Card className="Litem">                    
                                <CardBody className="navy d-flex justify-content-around">
                                    <span className="item text-left">{this.props.servicios.name}</span>
                                    <span className="item text-left">Basico</span>
                                    <span className="item text-left">Bs. {this.props.servicios.price}</span>
                                    <a href="javascript:void(0)"><i className=" expand navy big material-icons align-top">expand_more</i></a>             
                                </CardBody>
                            </Card>
                            <a href="javascript:void(0)" className="pen-container mx-auto"><i className="pen medium navy material-icons">edit</i></a>
                            <a href="javascript:void(0)" className="pen-container mx-auto"><i className="pen medium navy material-icons">delete</i></a>
                        </div>

                    )                   
                } else {
                    return( 
                        <div className="d-flex flex-row">
                            <Card className="extraO Litem">                    
                                <CardBody className="white d-flex justify-content-around">
                                    <span className="item text-left">{this.props.servicios.name}</span>
                                    <span className="item text-left">Extraordinario</span>
                                    <span className="item text-left">Bs. {this.props.servicios.price}</span>
                                    <a href="javascript:void(0)"><i className=" expand white big material-icons align-top">expand_more</i></a>             
                                </CardBody>
                            </Card>
                            <a href="javascript:void(0)" className="pen-container mx-auto"><i className="pen medium navy material-icons">edit</i></a>
                            <a href="javascript:void(0)" className="pen-container mx-auto"><i className="pen medium navy material-icons">delete</i></a>
                        </div>

                    )
                }
            }
            case 'Cargar Pago': {
                if(this.props.payment.confirmacion == '0'){
                    return (
                        <div className="d-flex flex-row">
                            <Card className="Litem">                    
                                <CardBody className="navy d-flex justify-content-around ">
                                    <span className="item text-left">{this.props.payment.description} </span>
                                    <span className="item text-left">{this.props.payment.bill_id}</span>
                                    <span className="item text-left">{this.props.payment.creation_date}</span>
                                    <span className="item text-left">{this.props.payment.amount}</span>
                                    
                                    <a href="javascript:void(0)"><i className=" expand navy medium material-icons align-bottom">check_circle_outline</i></a>             
                                </CardBody>
                            </Card>
                            <a href="javascript:void(0)" className="pen-container mx-auto"><i className="pen medium navy material-icons">cancel_presentation</i></a>
                        </div>
                    )
                }else if(this.props.payment.confirmacion == '1'){
                    return (
                        <div className="d-flex flex-row">
                            <Card className="extraO Litem">                    
                                <CardBody className="navy d-flex justify-content-around ">
                                    <span className="item text-left">{this.props.payment.description} </span>
                                    <span className="item text-left">{this.props.payment.bill_id}</span>
                                    <span className="item text-left">{this.props.payment.creation_date}</span>
                                    <span className="item text-left">{this.props.payment.amount}</span>
                                    
                                    <a href="javascript:void(0)"><i className=" expand navy medium material-icons align-bottom">check_circle_outline</i></a>             
                                </CardBody>
                            </Card>
                            <a href="javascript:void(0)" className="pen-container mx-auto"><i className="pen medium navy material-icons">cancel_presentation</i></a>
                        </div>
                    )        
                }else if(this.props.payment.confirmacion == '-1'){
                    return (
                        <div className="d-flex flex-row">
                            <Card className="deuda Litem">                    
                                <CardBody className="navy d-flex justify-content-around ">
                                    <span className="item text-left">{this.props.payment.description} </span>
                                    <span className="item text-left">{this.props.payment.bill_id}</span>
                                    <span className="item text-left">{this.props.payment.creation_date}</span>
                                    <span className="item text-left">{this.props.payment.amount}</span>
                                    
                                    <a href="javascript:void(0)"><i className=" expand navy medium material-icons align-bottom">check_circle_outline</i></a>             
                                </CardBody>
                            </Card>
                            <a href="javascript:void(0)" className="pen-container mx-auto"><i className="pen medium navy material-icons">cancel_presentation</i></a>
                        </div>
                    )        
                }

            }
            // eslint-disable-next-line no-fallthrough
            default:{
                break;
            }
        }
    }
    
    render() {
        return(
            <div>
                {this.viewCheck(this.props.title)}
            </div>
        );
    }
}