/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/anchor-is-valid */
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
                        <div className="d-flex flex-row">
                            <Card className=" Litem">
                                <CardBody className="navy d-flex justify-content-around">
                                    <span className="item text-left">{this.props.propiedad.department_num}</span>
                                    <span className="item text-left">{this.buscarNombre(this.props.propiedad.user_id)}</span>
                                    <span className="item text-left">{this.props.propiedad.yardage}</span>          
                                </CardBody>    
                            </Card>
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
                                </CardBody>
                            </Card>
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
                            </CardBody>
                        </Card>
                    </div>
                )
            }
            case 'Ver Gastos': {
                var fecha = new Date(this.props.expense.creation_date)
                
                return(
                    <div className="d-flex flex-row">
                        <Card className="Litem">                    
                            <CardBody className="white d-flex justify-content-around">
                                <span className="item navy text-center">{this.props.expense.concept}</span>
                                <span className="item navy text-center">{fecha.toISOString().slice(0,10)}</span>
                                <span className="item navy text-center">Bs. {this.props.expense.amount}</span>           
                            </CardBody>
                        </Card>
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
                            </CardBody>
                        </Card>
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
                                </CardBody>
                            </Card></div>

                    )                   
                } else {
                    return( 
                        <div className="d-flex flex-row">
                            <Card className="extraO Litem">                    
                                <CardBody className="white d-flex justify-content-around">
                                    <span className="item text-left">{this.props.servicios.name}</span>
                                    <span className="item text-left">Extraordinario</span>
                                    <span className="item text-left">Bs. {this.props.servicios.price}</span>          
                                </CardBody>
                            </Card></div>

                    )
                }
            }
            case 'Cargar Pago': {
                if(this.props.payment.confirmation == '0'){
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
                }else if(this.props.payment.confirmation == '1'){
                    return (
                        <div className="d-flex flex-row">
                            <Card className="extraO Litem">                    
                                <CardBody className="navy d-flex justify-content-around ">
                                    <span className="item text-left">{this.props.payment.description} </span>
                                    <span className="item text-left">{this.props.payment.bill_id}</span>
                                    <span className="item text-left">{this.props.payment.creation_date}</span>
                                    <span className="item text-left">Bs. {this.props.payment.amount}</span>
                                    
                                    <a href="javascript:void(0)"><i className=" expand navy medium material-icons align-bottom">check_circle_outline</i></a>             
                                </CardBody>
                            </Card>
                            <a href="javascript:void(0)" className="pen-container mx-auto"><i className="pen medium navy material-icons">cancel_presentation</i></a>
                        </div>
                    )        
                }else if(this.props.payment.confirmation == '-1'){
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