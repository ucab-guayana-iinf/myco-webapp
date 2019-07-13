import React, { Component } from 'react'
import {Card, CardBody, Modal,FormRadio, InputGroup, InputGroupText, InputGroupAddon, ModalFooter,ModalHeader, Form, FormGroup, FormInput} from 'shards-react'
import './assets/Login.css';
import SignUp from '../SignUp/SignUp'
import { withRouter } from 'react-router-dom'

class Login extends Component {
	state = {
		email: '',
		password: '',
		role:''
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
	changeRole = (rol) => {
        this.setState({
            role: rol
        })
    }
	fetchData = (event) => {
        //para que no se recargue la pagina en el submit
        event.preventDefault()
        //validacion de campos vacios
        if (this.state.email === '' || this.state.password === '' || this.state.role === '') {
            alert('debes llenar todos los campos')
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
			localStorage.setItem("admin_id", res.id)
			localStorage.setItem("role",this.state.role)
			console.log("respuesta login: ", res)
        })
		.then( () =>{
			if(this.state.role === 'ADMIN'){
				this.props.history.push('/Residencias')
			}else{
				this.props.history.push('/Deudas')
			}
			 
		})
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
									
								<button type="submit" className="btn btn-primary">Login</button>
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