import React, { Component } from 'react'
import {Card, CardBody, Modal, InputGroup, InputGroupText, InputGroupAddon, ModalFooter,ModalHeader, Form, FormGroup, FormInput} from 'shards-react'
import './assets/Login.css';
import { withRouter } from 'react-router-dom'

class Login extends Component {
	state = {
		email: '',
		password: ''
	}

	handleChange = (event) => {
		const campo = event.target.name

		this.setState({
			[campo]: event.target.value 
		})
	}
       
	fetchData = (event) => {
        //para que no se recargue la pagina en el submit
        event.preventDefault()
        //validacion de campos vacios
        if (this.state.email === '' || this.state.password === '') {
            alert('maricon llena la vaina pues')
            return
        }
        //post para login
		fetch("https://myco-backend.herokuapp.com/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then(resJson => resJson.json())
        .then(res => {
            console.log("token devuelto por el server: ", res.token)
            localStorage.setItem("token", res.token)
        })
        .then( () => this.props.history.push('/FAQs') ) //redireccionar al dashboard s
        .catch(error => console.error('Hubo un error mano:', error))
    }

	render() {
		return (
			<Modal size="med" open={this.props.open} toggle={this.props.toggle}>
				<Card>
					<ModalHeader>Inicio de Sesion</ModalHeader>

					<CardBody className="mx-0 mb-n2">
						
						<Form onSubmit={this.fetchData}>
							<FormGroup>
								<InputGroup className="mb-1">
									<InputGroupAddon type="prepend" >
										<InputGroupText className="navy">Email</InputGroupText>
									</InputGroupAddon>
									<FormInput size="med" type="email" name="email" placeholder="Tu correo electrónico" onChange={this.handleChange} />
								</InputGroup>
							</FormGroup>
							<FormGroup>
								<InputGroup className="mb-1">
									<InputGroupAddon type="prepend" >
										<InputGroupText className="navy">Contraseña</InputGroupText>
									</InputGroupAddon>
									<FormInput size="med" type="password" name="password" placeholder="Contraseña" onChange={this.handleChange} />
								</InputGroup>
								
								<button type="submit" className="btn btn-primary">Login</button>
							</FormGroup>
						</Form>
					</CardBody>

					<ModalFooter className="mt-0 small">
							<a href="/SignUp" className="aquamarine text text-center">No posees una cuenta aun?</a>
					</ModalFooter>
				</Card>
			</Modal>
		)
	}
}

export default withRouter(Login)