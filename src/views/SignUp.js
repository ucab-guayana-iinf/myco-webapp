import React, { Component } from 'react';
import NavBar from '../components/Utilities/NavBar/NavBar'
import { Card, CardBody, InputGroup, InputGroupText, InputGroupAddon, Form, FormGroup, FormInput } from 'shards-react'

export default class SignUp extends Component {
    
	state = {
        name : '',
        lastname: '',
        email : '',
        password : '',
        social_number : '',
        picture_url : 'url',
        role: 'ADMIN'
    }

    fetchState = (event) => {
        event.preventDefault()
        fetch("https://myco-backend.herokuapp.com/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then(res => res.json()) //esta respuesta es HTML, no JSON. Por eso se usa .text() en vez de .json()
        .then(res => { 
            console.log("respuesa registro: ", res)
            this.login()    //logearse luego de registrarse
        })
        .catch(error => console.error('Hubo un error en el registro:', error))
    }

    login = () => {
        //post para login con la info que se acaba de registrar
		fetch("https://myco-backend.herokuapp.com/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
                
            })
        })
        .then(res => res.json()) //esta respuesta si viene en JSON asi que se usa .json()
        .then(res => {
            console.log("token de login: ", res.token)
            localStorage.setItem("token", res.token)
        })
        .then( () => this.props.history.push('/Residencias') ) //navegar al dashboard (por ahora va a residencias)
        .catch(error => console.error('Hubo un error en el login:', error))
    }

    handleChange = (event) => {
        const campo = event.target.name

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
                                    <FormInput size="med" onChange={this.handleChange} type="file" placeholder="Foto" />
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