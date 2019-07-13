import React, { Component } from 'react';
import { FormRadio, Modal,ModalHeader, Card, CardBody, InputGroup, InputGroupText, InputGroupAddon, Form, FormGroup, FormInput } from 'shards-react'
import { withRouter } from 'react-router-dom'

class SignUp extends Component {
    
	state = {
        name : '',
        picture_url : 'url',
        lastname: '',
        email : '',
        password : '',
        social_number : '',
        role: ''
    }
    
    //registro
    fetchState = (event) => {
        event.preventDefault()
        if (this.state.email === '' || this.state.password === '' || this.state.lastname === '' || this.state.name === '' || this.state.role === '' || this.state.social_number === '') {
            alert('debes llenar todos los campos')
            return
        }
        fetch("https://myco-backend.herokuapp.com/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then(res => res.json()) 
        .then(res => { 
            console.log("respuesta signUp: ", res)
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
        .then(res => res.json()) 
        .then(res => {
            localStorage.setItem("token", res.token)
            localStorage.setItem("logged", true)
            localStorage.setItem("admin_id", res.id)
            localStorage.setItem("role", this.state.role)
            console.log("respuesta login: ", res)
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

    changeRole = (rol) => {
        this.setState({
            role: rol
        })
    }

    render() {
        return (
            <Modal size="med" className="signup" open={this.props.open} toggle={this.props.toggle}>
                <Card>
                    <ModalHeader>Registro</ModalHeader>
                    <CardBody className="mx-0">
                        <Form onSubmit={this.fetchState}>
                            <FormGroup>
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
                            </FormGroup>
                            <FormGroup>
                                <InputGroup className="mb-1">
                                    <InputGroupAddon type="prepend" >
                                        <InputGroupText className="navy">Foto de perfil</InputGroupText>
                                    </InputGroupAddon>
                                    <FormInput size="med" onChange={this.handleChange} type="file" placeholder="Foto" />
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <FormRadio
									inline
									name="role"
									checked={this.state.role === "RESIDENT"}
									onChange={() => this.changeRole("RESIDENT")}
								>
								    Residente
								</FormRadio>
								<FormRadio
									inline
									name="role"
									checked={this.state.role === "ADMIN"}
									onChange={() => this.changeRole("ADMIN")}
								>
								    Admin
								</FormRadio>
                            </FormGroup>
                            <button className="btn btn-primary">Registrarse</button>
                        </Form>
                    </CardBody>
                </Card>
            </Modal>
        );
    }
    
};

export default withRouter(SignUp)