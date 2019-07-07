import React, { Component } from 'react';
import { Modal,ModalHeader, Card, CardBody, InputGroup, InputGroupText, InputGroupAddon, Form, FormGroup, FormInput } from 'shards-react'
import { withRouter } from 'react-router-dom'

class SignUp extends Component {
    
	state = {
        name : '',
        picture_url : 'url',
        lastname: '',
        email : '',
        social_number : '',
        password : '',
        role: 'ADMIN'
    }
    
    fetchState = (event) => {
        console.log(JSON.stringify(this.state))
        event.preventDefault()
        fetch("https://myco-backend.herokuapp.com/register", {
            method: 'POST',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then( res => res.text())
        .then(res => {
            console.log("respuesta del server: ", res)
            this.login()
        })
        .catch(error=> console.error('Hubo un error:',error))
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


    handleChange = (event) => {
        const campo = event.target.name
        console.log(campo, " ", event.target.value)
        this.setState({
            [campo] : event.target.value 
        })
    }

    render() {
        return (
            <Modal size="med" className="signup" open={this.props.open} toggle={this.props.toggle}>
                <Card >
                    <ModalHeader className="big navy title mx-0">Registro</ModalHeader>
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
            </Modal>
        );
    }
    
};

export default withRouter(SignUp)