import React, { Redirect, Component } from 'react';
import NavBar from '../components/Utilities/NavBar/NavBar'
import { Card, CardBody, InputGroup, InputGroupText, InputGroupAddon, Form, FormGroup, FormInput } from 'shards-react'

export default class SignUp extends Component {
    
	state = {
        name : '',
        picture_url : 'aaaaa',
        lastname: '',
        email : '',
        social_number : '',
        password : '',
        role: 'ADMIN'
    }
    
    obj = {
        name: "pene",
        lastname: "rico",
        social_number: "69",
        picture_url: "aaaaa",
        email: "asdjaj@gmail.com",
        password: "pene",
        role: "ADMIN"
    }

    fetchState = (event) => {
        console.log(JSON.stringify(this.obj))
        event.preventDefault()
        fetch("https://myco-backend.herokuapp.com/register", {
            method: 'POST',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify(this.obj)
        })
        .then( res => res.json())
        .then(res => {
            console.log("respuesta del server: ", res)
        })
        .catch(error=> console.error('Hubo un error:',error))
    }

    handleChange = (event) => {
        const campo = event.target.name
        console.log(campo, " ", event.target.value)
        this.setState({
            [campo] : event.target.value 
        })
    }

    render() {
        return (
            <div className="signup">
                <NavBar/>
                <h1 className="big navy title mt-5">Registro</h1>
                
                <Card className="mx-auto" style={{width: 750}}>
                    <CardBody className="mx-0">
                        <Form onSubmit={this.fetchState}>
                            <FormGroup >
                                <InputGroup className="mb-1">
                                    <InputGroupAddon type="prepend" >
                                        <InputGroupText className="navy">Nombre</InputGroupText>
                                    </InputGroupAddon>
                                    <FormInput onChange={this.handleChange} size="med" name="name" type="text" placeholder="" />

                                    <InputGroupAddon type="prepend" >
                                        <InputGroupText className="navy">Apellido</InputGroupText>
                                    </InputGroupAddon>
                                    <FormInput onChange={this.handleChange} size="med" name="lastname" type="text" placeholder="" />
                                </InputGroup>
    
                                <InputGroup className="mb-1">
                                    <InputGroupAddon type="prepend" >
                                        <InputGroupText className="navy">e-mail</InputGroupText>
                                    </InputGroupAddon>
                                    <FormInput size="med" onChange={this.handleChange} name="email" type="email" placeholder="correo electronico" />
                                </InputGroup>
    
                                <InputGroup className="mb-1">
                                    <InputGroupAddon type="prepend" >
                                        <InputGroupText className="navy">Numero de Cedula</InputGroupText>
                                    </InputGroupAddon>
                                    <FormInput size="med" onChange={this.handleChange} type="text" name="social_number" placeholder="Cedula" />
                                </InputGroup>
    
                                <InputGroup className="mb-1">
                                    <InputGroupAddon type="prepend" >
                                        <InputGroupText className="navy">Contraseña</InputGroupText>
                                    </InputGroupAddon>
                                    <FormInput size="med" onChange={this.handleChange} type="password" name="password" placeholder="Contraseña" />
                                </InputGroup>
    
                                <InputGroup className="mb-1">
                                    <InputGroupAddon type="prepend" >
                                        <InputGroupText className="navy">Foto de perfil</InputGroupText>
                                    </InputGroupAddon>
                                    <FormInput size="med" onChange={this.handleChange} type="file" placeholder="Nombre de Usuario ó e-mail" />
                                </InputGroup>
    
    
                                <button className="btn btn-primary" >Registrarse</button>
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </div>
        );
    }
    
};