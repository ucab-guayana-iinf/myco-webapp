import React, { Component } from 'react'
import {Card, CardBody, Modal, InputGroup, InputGroupText, InputGroupAddon, ModalFooter,ModalHeader, Form, FormGroup, FormInput} from 'shards-react'
import './assets/Login.css';
import SignUp from '../SignUp/SignUp'
import { withRouter } from 'react-router-dom'

class Login extends Component {
	state = {
		email: '',
		password: ''
	}

	constructor(props) {
        super(props);
        
        this.state = { 
            open: false, 
        };
	}

	toggle = () => {
		this.setState({
			open: !this.state.open
		});		
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
            alert('debes llenar ambos campos')
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
            
            localStorage.setItem("token", res.token)
			localStorage.setItem("logged", true)
			console.log("token devuelto por el server: ", res.token, "logged: ",localStorage.getItem("logged"))
        })
        .then( () => this.props.history.push('/Residencias') )
        .catch(error => console.error('Hubo un error mano:', error))
    }

	render() {
		return (
			<React.Fragment>
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
								<a href="javascript:void(0)" onClick={this.toggle} className="aquamarine text text-center">No posees una cuenta aun?</a>
						</ModalFooter>
					</Card>
				</Modal>
				<SignUp open={this.state.open} toggle={this.toggle}/>
			</React.Fragment>
		)
	}
}

export default withRouter(Login)