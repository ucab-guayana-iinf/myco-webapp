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
            case 'Residencias': {
                const {name, yardage} = this.props.residencia;
                return (
                    <div>
                        <CardHeader onClick={this.selected} className="card-header fill">
                            <CardTitle className="white mb-0">{name}</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <div className="navy bold">
                                <i className="medium align-bottom material-icons">home</i>
                                {this.props.nroPropiedades[this.props.index]} propiedades
                            </div>
                            <br></br>
                            <ul className="px-0 lista text-center">
                                <li>{yardage} metros cuadrados</li>
                            </ul>
                        </CardBody>
                    </div>
                )
            }
            case 'Tipos de Propiedades': { //recibe la funcion pa abrir el modal de editar como prop para que mande el id desde aqui
                const {name, id} = this.props.propertyType;
                return(     
                    <div>               
                        <CardBody className="">
                            <CardTitle className="aquamarine mb-0 fill">
                                {name}<a href="javascript:void(0)"><i onClick={()=>this.props.toggle2(id)} className=" ml-2 navy material-icons"> edit</i></a>
                            </CardTitle>
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
        localStorage.setItem("residency_id", this.props.residencia.id)
        localStorage.setItem("residenciActual", this.props.residencia.name)
        this.props.history.push('/Residencias')
        console.log('residencia actual: ', localStorage.getItem("residenciActual"))
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