import React, { Component } from 'react'
import {Card, CardBody, FormRadio ,Modal, InputGroup, InputGroupText, InputGroupAddon,ModalHeader, Form, FormGroup, FormInput} from 'shards-react'
import { withRouter } from 'react-router-dom'

class CrearServicio extends Component {
	//cambio hecho en lilbranch que va para laramita
    state = {
        residency_id : localStorage.getItem("residency_id"),
        price : '',
		name : '',
		type: ''
	}

	changeType(type) {
		this.setState({
		  type: type
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
        if (this.state.amount === '' || this.state.name === '') {
            alert('debes llenar ambos campos')
            return
		}
		
		fetch("https://myco-backend.herokuapp.com/residency/service", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + localStorage.getItem("token")
            },
            body: JSON.stringify(this.state)
        })
		.then(res => res.json())
		.then(res => {
			console.log("Servicio creado", this.state)
			window.location.reload()
        })
        .catch(error => console.error('Hubo un error creando el servicio:', error))
    }

	render() {
		return (
			<Modal size="med" open={this.props.open} toggle={this.props.toggle}>
				<Card>
					<ModalHeader>Crear Servicio</ModalHeader>
					
					<CardBody className="mx-0">
						<Form onSubmit={this.fetchData}>
							<FormGroup>
								<InputGroup className="mb-1">
									<InputGroupAddon type="prepend" >
										<InputGroupText className="navy">Nombre</InputGroupText>
									</InputGroupAddon>
									<FormInput size="med" type="text" name="name" placeholder="Nombre del Servicio" onChange={this.handleChange} />
								</InputGroup>
							</FormGroup>

							<FormGroup>
								<InputGroup className="mb-1">
									<InputGroupAddon type="prepend" >
										<InputGroupText className="navy">Costo</InputGroupText>
									</InputGroupAddon>
									<FormInput size="med" type="text" name="price" placeholder="Costo mensual del servicio" onChange={this.handleChange} />
								</InputGroup>
							</FormGroup>

							<FormGroup>
								<FormRadio
									inline
									name="type"
									checked={this.state.type === "0"}
									onChange={() => {
										this.changeType("0");
									}}
								>
								Basico
								</FormRadio>
								<FormRadio
									inline
									name="type"
									checked={this.state.type === "1"}
									onChange={() => {
										this.changeType("1");
									}}
								>
								Extraordinario
								</FormRadio>
							</FormGroup>
							
							<FormGroup>
								<button type="submit" className="btn btn-primary">Crear</button>
							</FormGroup>
						</Form>
					</CardBody>
				</Card>
			</Modal>
		)
	}
}

export default withRouter(CrearServicio)