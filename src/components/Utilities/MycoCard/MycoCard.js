import React, { Component } from 'react';
import {
    Card,
    CardHeader,
    CardTitle,
    CardBody
  } from "shards-react";
import './assets/MycoCard.css'

export default class MycoCard extends Component {
    //probando gaykraken
    render() { //le quite la variable users y properties y les puse valores fijos pq aun esas vainas no estan
        const {name, yardage} = this.props.residencia;

        return(
            <Card className="MycoCard">
                <CardHeader className="card-header fill"><CardTitle className="white mb-0">{name} <i className="navy material-icons">info</i></CardTitle></CardHeader>
                <CardBody>
                    <div className="navy bold"><i className="medium align-bottom material-icons">home</i> 69 propiedades</div><br></br>
                    <ul className="px-0 lista text-center">
                        <li>69 propietarios</li>
                        <li>{yardage} metros</li>
                    </ul>
                </CardBody>
            </Card>
        );
    }
}