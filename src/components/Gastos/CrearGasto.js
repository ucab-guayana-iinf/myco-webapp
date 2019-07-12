import React, { Component } from 'react'
import {Card, CardBody, Modal, InputGroup, InputGroupText, InputGroupAddon,ModalHeader, Form, FormGroup, FormInput} from 'shards-react'
import { withRouter } from 'react-router-dom'

class CrearPropiedad extends Component {

    state = {
        id : '', 
        responsible_user_id : '',  
        amount : '',
        concept : '',
        creation_date: localStorage.getItem("creation_date")
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
        if (this.state.concept === '' || this.state.amount === '' || this.state.creation_date === '') {
            alert('debes llenar ambos campos')
            return
        }
        //post para login
		fetch("https://myco-backend.herokuapp.com/residency/expense", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + localStorage.getItem("token")
            },
            body: JSON.stringify(this.state)
        })
        .then(resJson => resJson.json())
		.then(res => {
            console.log("Gasto creado:",this.state)
        })
        .catch(error => console.error('Hubo un error mano:', error))
    }

	render() {

        var fecha = new Date()
        fecha = fecha.toISOString().slice(0,10)
        localStorage.setItem("creation_date", fecha)
		return (
            
			<Modal size="med" open={this.props.open} toggle={this.props.toggle}>
				<Card>
                    <ModalHeader>Crear Gasto</ModalHeader>
                    <i className="navy">Fecha de Creacion</i><div className="navy small title">{this.state.creation_date}</div>
					<CardBody className="mx-0 mb-n2">
						
						<Form onSubmit={this.fetchData}>
							<FormGroup>
								<InputGroup className="mb-1">
									<InputGroupAddon type="prepend" >
										<InputGroupText className="navy">Concepto de Gasto</InputGroupText>
									</InputGroupAddon>
									<FormInput size="med" type="text" name="concept" placeholder="Concepto de Gasto" onChange={this.handleChange} />
								</InputGroup>
							</FormGroup>

							<FormGroup>
								<InputGroup className="mb-1">
									<InputGroupAddon type="prepend" >
										<InputGroupText className="navy">Costo(Bs.)</InputGroupText>
									</InputGroupAddon>
                                    <FormInput size="med" type="text" name="amount" placeholder="2000" onChange={this.handleChange} />
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

export default withRouter(CrearPropiedad)