import React, { Component } from 'react'
import {Card, CardBody, Modal, InputGroup, InputGroupText, InputGroupAddon,ModalHeader, Form, FormGroup, FormInput} from 'shards-react'

class CrearPropiedad extends Component {

    state = {
        residency_id : '', // obtener de local storage almacenar al seleccionar una residencia
        property_type_id : '', // ni puta idea, supongo que al seleccionar el tipo de propiedad de unas opciones te devuelve el id de la seleccionada 
        user_id : '', //ni puta idea 2
        yardage : '',
        department_number: ''
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
        //post para login
		fetch("https://myco-backend.herokuapp.com/residency/create", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + localStorage.getItem("token")
            },
            body: JSON.stringify(this.state)
        })
        .then(resJson => resJson.json())
		.then(res => {
            console.log("Propiedad creada:",this.state)
        })
        .catch(error => console.error('Hubo un error mano:', error))
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
										<InputGroupText className="navy">Numero</InputGroupText>
									</InputGroupAddon>
									<FormInput size="med" type="text" name="department_number" placeholder="Numero de Departamento" onChange={this.handleChange} />
								</InputGroup>
							</FormGroup>

							<FormGroup>
								<InputGroup className="mb-1">
									<InputGroupAddon type="prepend" >
										<InputGroupText className="navy">Metros Cuadrados</InputGroupText>
									</InputGroupAddon>
									<FormInput size="med" type="text" name="yardage" placeholder="2000" onChange={this.handleChange} />
                                    <InputGroupText className="navy">Tipo de Propiedad</InputGroupText>
                                    <FormInput size="med" type="text" name="property_type_id" placeholder="2000" onChange={this.handleChange} />
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

export default CrearPropiedad