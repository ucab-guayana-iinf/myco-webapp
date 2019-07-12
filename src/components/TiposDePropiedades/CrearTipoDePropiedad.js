import React, { Component } from 'react'
import {Card, CardBody, Modal, InputGroup, InputGroupText, InputGroupAddon, ModalHeader, Form, FormGroup, FormInput} from 'shards-react'
import { withRouter } from 'react-router-dom'

class CrearTipoDePropiedad extends Component {

    state = {
		residency_id : localStorage.getItem("residency_id"),
        name : '',
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
        if (this.state.name === '') {
            alert('debes llenar ambos campos')
            return 
        }
        //post para crear residencia
		fetch("https://myco-backend.herokuapp.com/residency/property-types", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + localStorage.getItem("token")
            },
            body: JSON.stringify(this.state)
        })
		.then(res => res.json())
		.then(() => window.location.reload())
        .catch(error => console.error('Hubo un error creando el tipo de propiedad:', error))
    }

	render() {

		return (
			<Modal size="med" open={this.props.open} toggle={this.props.toggle}>
				<Card>

                    <ModalHeader>Crear Tipo de Propiedad</ModalHeader>
					<CardBody className="mx-0 mb-n2">

						<Form onSubmit={this.fetchData}>
							<FormGroup>
								<InputGroup className="mb-1">
									<InputGroupAddon type="prepend">
										<InputGroupText className="navy">Tipo de Propiedad</InputGroupText>
									</InputGroupAddon>
									<FormInput size="med" type="text" name="name" placeholder="Tipo de Propiedad" onChange={this.handleChange}/>
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

export default withRouter(CrearTipoDePropiedad)