import React, { Component } from 'react'
import {Card, CardBody, Modal, InputGroup, InputGroupText, InputGroupAddon, ModalFooter,ModalHeader, Form, FormGroup, FormInput} from 'shards-react'
import './assets/Login.css';

export default class Login extends Component {
	state = {
		email: '',
		password: ''
	}

	handleChange = (event) => {
		const campo = event.target.name;

		this.setState({
			[campo]: event.target.value 
		})
	}

	fetchData = () => {
		console.log("fetching data");
		fetch()
	}

	render(){
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
								
								<button className="btn btn-primary">Login</button>
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