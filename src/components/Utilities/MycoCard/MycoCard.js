import React, { Component } from 'react';
import {
    Card,
    CardHeader,
    CardTitle,
    CardBody
  } from "shards-react";
import './assets/MycoCard.css'
import { withRouter } from 'react-router-dom'

class MycoCard extends Component {

    
    viewCheck = (title) => {
        
        switch(title){
            case 'Propiedades': {
                return(
                    <div></div>
                )
            }
            case 'Residencias': {
                const {name, yardage} = this.props.residencia;
                return(
                    <div>
                        <CardHeader onClick={this.selected} className="card-header fill"><CardTitle className="white mb-0">{name}<i className=" ml-2 navy material-icons"> edit</i></CardTitle></CardHeader>
                        <CardBody>
                            <div className="navy bold"><i className="medium align-bottom material-icons">home</i> X propiedades</div><br></br>
                            <ul className="px-0 lista text-center">
                                <li>X deudas</li>
                                <li>{yardage} metros</li>
                            </ul>
                        </CardBody>
                    </div>
                    )
            }
            case 'Ingresos Y Egresos': {
                return(
                    <div></div>
                    )
            }

            case 'Cuentas por cobrar': {
                return(
                    <div></div>
                    )
            }

            case 'Generar Factura': {
                return(
                    <div></div>
                )
            }

            case 'Servicios': {
                return(
                    <div></div>
                )
            }
            
            case 'Tipos de Propiedades': {
                const {name, yardage} = this.props.propertyType;
                return(     
                    <div>               
                        <CardBody className="">
                            <CardTitle className="aquamarine mb-0 fill">{name}<i className=" ml-2 navy material-icons"> edit</i></CardTitle>
                        </CardBody>
                    </div>   
                )
            }

            case 'Cargar Pago': {
                return(
                    <div></div>
                )
            }

            default : {
                break;
            }
        }
            
    }

    //metodo que guarda el id y el nombre de la residencia actual seleccionada
    selected = () => {
        localStorage.setItem("residency_id",this.props.residencia.id)
        localStorage.setItem("residenciActual",this.props.residencia.name)
        this.props.history.push('/Residencias')
        console.log( localStorage.getItem("residenciActual",this.props.residencia.name))
    }    

    render() { //le quite la variable users y properties y les puse valores fijos pq aun esas vainas no estan

        return(
            <Card className="MycoCard">
                {this.viewCheck(this.props.title)}
            </Card>          
        );
    }
}

export default withRouter(MycoCard)