import React, { Component } from 'react'
import { FormSelect, Card, CardBody, Modal, InputGroup, InputGroupText, InputGroupAddon,ModalHeader, Form, FormGroup, FormInput } from 'shards-react'

class CrearPropiedad extends Component {

    state = {
        residency_id : localStorage.getItem("residency_id"), 
        property_type_id: '',  
        user_id : '',
        yardage : '',
        department_num: ''
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
        if (this.state.property_type_id === '' || this.state.user_id === '' || this.state.yardage === '' || this.state.department_num === '') {
            alert('debes llenar todos los campos')
            return
        }
        //post para crear una propiedad
		fetch("https://myco-backend.herokuapp.com/residency/properties", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + localStorage.getItem("token")
            },
            body: JSON.stringify(this.state)
        })
        .then(res => res.text()) //esta respuesta no es un json 
		.then(res => {
			console.log(res)
			window.location.reload()
        })
        .catch(error => console.error('Hubo un error creando la propiedad:', error))
    }

	render() {
		return (
			<Modal size="med" open={this.props.open} toggle={this.props.toggle}>
				<Card>
					<ModalHeader>Crear Propiedad</ModalHeader>

					<CardBody className="mx-0 mb-n2">
						<Form onSubmit={this.fetchData}>
							<FormGroup>
								<InputGroup className="mb-1">
									<InputGroupAddon type="prepend" >
										<InputGroupText className="navy">Numero</InputGroupText>
									</InputGroupAddon>
									<FormInput size="med" type="text" name="department_num" placeholder="Numero de Departamento" onChange={this.handleChange} />
								</InputGroup>
							</FormGroup>

							<FormGroup>
								<InputGroup className="mb-1">
									<InputGroupAddon type="prepend">
										<InputGroupText className="navy">Mt. Cuadrados</InputGroupText>
									</InputGroupAddon>
									<FormInput size="med" type="text" name="yardage" placeholder="2000" onChange={this.handleChange} />

									<FormSelect name="property_type_id" onChange={this.handleChange} style={{marginTop: 9.5}}>
										<option value="def">Tipo de Propiedad</option>
										{this.props.propertyTypes.map((propType, i) => 
											<option key={i} value={propType.id}>{propType.name}</option>
										)}
									</FormSelect>
								</InputGroup>
							</FormGroup>

							<FormGroup>
									<FormSelect name="user_id" onChange={this.handleChange}>
										<option value="def">Seleccione al propietario</option>
										{this.props.users.map((user, i) => 
											<option key={i} value={user.id}>{user.name}{' '}{user.lastname}</option>
										)}
									</FormSelect>
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