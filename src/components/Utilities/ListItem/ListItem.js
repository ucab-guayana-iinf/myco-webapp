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
    
    state = {
        user_id : '',
        bill_id : '',
        amount : '',
        confirmation : '',
        description : ''
    }


	fetchData = (event) => {
        //para que no se recargue la pagina en el submit
        event.preventDefault()
        //validacion de campos vacios
        if (this.state.name === '') {
            alert('debes ingresar un nombre')
            return 
        }
        
        //post para editar tipo de propiedad (no guardo el id en state porque no carga a tiempo y explota)
		fetch("https://myco-backend.herokuapp.com/residency/payments", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + localStorage.getItem("token")
            },
            body: JSON.stringify({
                id: this.props.payment.user_id,
                user_id: this.props.payment.user_id,
                bill_id: this.props.payment.bill_id,
                amount : this.props.payment.amount,
                description:this.props.payment.description,
                property_id:'1',
                monthly_payment:'2',
                debt:'3',
                special_fee:'4',
                other:'5',
                confirmation: 1
            })
        })
		.then(res => res.json())
		.then()
        .catch(error => console.error('Hubo un error editando el tipo de propiedad:', error))
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
                                    <span className="item text-left">{this.props.propiedad.yardage} %</span>          
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
                                    <span className="item text-left">{this.props.propiedad.yardage} %</span>            
                                </CardBody>
                            </Card>
                        </div>
                    )         
                }
            }
            case 'Gastos': {
                var fecha = new Date(this.props.expense.creation_date)
                fecha = fecha.toISOString().slice(0,10)
                return(
                    <div className="d-flex flex-row">
                        <Card className="Litem">                    
                            <CardBody className="white d-flex justify-content-around">
                                <span className="item navy text-left">{this.props.expense.concept}</span>
                                <span className="item navy text-left">{fecha}</span>
                                <span className="item navy text-left">Bs. {this.props.expense.amount}</span>            
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
                                <span className="item navy text-left">{this.props.expense.concept}</span>
                                <span className="item navy text-left">{fecha.toISOString().slice(0,10)}</span>
                                <span className="item navy text-left">Bs. {this.props.expense.amount}</span>           
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
                var fecha = new Date(this.props.payment.creation_date)
                fecha = fecha.toISOString().slice(0,10)

                if(this.props.payment.confirmation == 0){
                    return (
                        <div className="d-flex flex-row">
                            <Card className="Litem">                    
                                <CardBody className="navy d-flex justify-content-around ">
                                    <span className="item text-left">{this.props.payment.description} </span>
                                    <span className="item text-left">{this.props.payment.bill_id}</span>
                                    <span className="item text-left">{fecha}</span>
                                    <span className="item text-left">{this.props.payment.amount}</span>
                                    
                                    <a href="javascript:void(0)" onClick={this.fetchData}><i className=" expand aquamarine medium material-icons align-bottom">check_circle_outline</i></a>             
                                </CardBody>
                            </Card>
                            <a href="javascript:void(0)" className="pen-container mx-auto"><i className="pen medium navy material-icons">cancel_presentation</i></a>
                        </div>
                    )
                }else if(this.props.payment.confirmation == 1){
                    return (
                        <div className="d-flex flex-row">
                            <Card className="extraO Litem">                    
                                <CardBody className="navy d-flex justify-content-around ">
                                    <span className="item text-left">{this.props.payment.description} </span>
                                    <span className="item text-left">{this.props.payment.bill_id}</span>
                                    <span className="item text-left">{fecha}</span>
                                    <span className="item text-left">Bs. {this.props.payment.amount}</span>
                                </CardBody>
                            </Card>
                        </div>
                    )        
                }else if(this.props.payment.confirmation == -1){
                    return (
                        <div className="d-flex flex-row">
                            <Card className="deuda Litem">                    
                                <CardBody className="navy d-flex justify-content-around ">
                                    <span className="item text-left">{this.props.payment.description} </span>
                                    <span className="item text-left">{this.props.payment.bill_id}</span>
                                    <span className="item text-left">{fecha}</span>
                                    <span className="item text-left">{this.props.payment.amount}</span>
                                 </CardBody>
                            </Card> 
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