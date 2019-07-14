import React, { Component } from 'react'
import {Card, CardBody, Modal, InputGroup, InputGroupText, InputGroupAddon, ModalHeader, Form, FormGroup, FormInput} from 'shards-react'

class CrearResidencia extends Component {

    state = {
        admin_id : localStorage.getItem("admin_id"), 
        name : '',
		yardage : ''
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
        if (this.state.name === '' || this.state.yardage === '') {
            alert('debes llenar ambos campos')
            return
        }
        //post para crear residencia
		fetch("https://myco-backend.herokuapp.com/residency/create", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + localStorage.getItem("token")
            },
            body: JSON.stringify(this.state)
        })
		.then(res => res.json())
		.then(res => {
			console.log("respuesta crearResidencia", res)
			localStorage.setItem('yardage',this.state.yardage)
			window.location.reload()
        })
        .catch(error => console.error('Hubo un error creando la residencia:', error))
    }

	render() {
		return (
			<Modal size="med" open={this.props.open} toggle={this.props.toggle}>
				<Card>
					<ModalHeader>Crear Residencia</ModalHeader>

					<CardBody className="mx-0 mb-n2">
						
						<Form onSubmit={this.fetchData}>
							<FormGroup>
								<InputGroup className="mb-1">
									<InputGroupAddon type="prepend" >
										<InputGroupText className="navy">Nombre</InputGroupText>
									</InputGroupAddon>
									<FormInput size="med" type="text" name="name" placeholder="Nombre de Residencia" onChange={this.handleChange} />
								</InputGroup>
							</FormGroup>

							<FormGroup>
								<InputGroup className="mb-1">
									<InputGroupAddon type="prepend" >
										<InputGroupText className="navy">Metros Cuadrados</InputGroupText>
									</InputGroupAddon>
									<FormInput size="med" type="text" name="yardage" placeholder="2000" onChange={this.handleChange} />
								</InputGroup>
							</FormGroup>

                            <button type="submit" className="btn btn-primary">Crear</button>
						</Form>
					</CardBody>
				</Card>
			</Modal>
		)
	}
}

export default CrearResidencia