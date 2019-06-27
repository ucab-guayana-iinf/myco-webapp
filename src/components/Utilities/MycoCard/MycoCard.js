import React, { Component } from 'react';
import {
    Card,
    CardHeader,
    CardTitle,
    CardBody
  } from "shards-react";
import './assets/MycoCard.css'

export default class MycoCard extends Component {

    render() {
        const {name,yardage,properties,users} = this.props.residencia;
        return(
            <Card className="MycoCard">
                <CardHeader className="card-header fill"><CardTitle className="white mb-0">{name} <i className="navy material-icons">info</i></CardTitle></CardHeader>
                <CardBody>
                    <div className="navy bold"><i className="medium align-bottom material-icons">home</i> {properties} propiedades</div><br></br>
                    <ul className="px-0 lista text-center">
                        <li>{users} propietarios</li>
                        <li>{yardage} metros</li>
                    </ul>
                </CardBody>
            </Card>
        );
    }
}