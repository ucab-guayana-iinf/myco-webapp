import React, { Component } from 'react'
import {Card, CardBody, Modal, InputGroup, InputGroupText, InputGroupAddon, ModalHeader, Form, FormGroup, FormInput} from 'shards-react'
import { withRouter } from 'react-router-dom'

class EditarTipoDePropiedad extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name : '',
        }

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
            alert('debes ingresar un nombre')
            return 
        }
        
        //post para editar tipo de propiedad (no guardo el id en state porque no carga a tiempo y explota)
		fetch("https://myco-backend.herokuapp.com/residency/property-types", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + localStorage.getItem("token")
            },
            body: JSON.stringify({
                name: this.state.name,
				id: this.props.id,
				yardage:'0'
            })
        })
		.then(res => res.json())
		.then(() => window.location.reload())
        .catch(error => console.error('Hubo un error editando el tipo de propiedad:', error))
    }

	render() {

		return (
			<Modal size="med" open={this.props.open} toggle={this.props.toggle}>
				<Card>
                    <ModalHeader>Editar Tipo de Propiedad</ModalHeader>
					<CardBody className="mx-0 mb-n2">

						<Form onSubmit={this.fetchData}>
							<FormGroup>
								<InputGroup className="mb-1">
									<InputGroupAddon type="prepend">
										<InputGroupText className="navy">Tipo de Propiedad</InputGroupText>
									</InputGroupAddon>
									<FormInput size="med" type="text" name="name" placeholder="Nuevo tipo de propiedad" onChange={this.handleChange}/>
								</InputGroup>
							</FormGroup>

                            <button type="submit" className="btn btn-primary">Editar</button>

						</Form>
					</CardBody>
				</Card>
			</Modal>
		)
	}
}

export default withRouter(EditarTipoDePropiedad)