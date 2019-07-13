import React, { Component } from 'react'
import {FormSelect, Card, CardBody,FormRadio, Modal, InputGroup, InputGroupText, InputGroupAddon,ModalHeader, Form, FormGroup, FormInput} from 'shards-react'
import { withRouter } from 'react-router-dom'

class CrearGasto extends Component {

    state = {
        id : '', 
        user_id : '',  
        amount : '',
        concept : '',
		creation_date: localStorage.getItem("creation_date"),
		type : ''
	}
	
	users = JSON.parse(localStorage.getItem("users"))
	
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
        if (this.state.concept === '' || this.state.amount === '' || this.state.creation_date === '') {
            alert('debes llenar todos los campos')
            return
		}
		
		if(this.state.type === 'resident') {
			fetch("https://myco-backend.herokuapp.com/resident/expense", {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': 'bearer ' + localStorage.getItem("token")
				},
				body: JSON.stringify({
					user_id: this.state.user_id,
					amount: this.state.amount,
					concept: this.state.concept
				})
			})
			.then(res => res.json())
			.then(res => {
				console.log("Gasto creado:", this.state)
				window.location.reload()
			})
			.catch(error => console.error('Hubo un error creando gasto para el residente:', error))
		}else {
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
			.catch(error => console.error('Hubo un error creando gasto para la residencia:', error))
		}
    }

	render() {
        
		return (
			<Modal size="med" open={this.props.open} toggle={this.props.toggle}>
				<Card>
                    <ModalHeader>Crear Gasto</ModalHeader>
                    <i className="navy">Fecha de Creacion</i><div className="navy small title">{this.state.creation_date}</div>
					<CardBody className="mx-0 mb-n2">
						<Form onSubmit={this.fetchData}>
							<FormGroup>
								<FormRadio
									inline
									name="type"
									checked={this.state.type === "resident"}
									onChange={() => {
										this.changeType("resident");
									}}
								>
								Residente
								</FormRadio>
								<FormRadio
									inline
									name="type"
									checked={this.state.type === "residency"}
									onChange={() => {
										this.changeType("residency");
									}}
								>
								Residencia
								</FormRadio>
							</FormGroup>

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

							<FormGroup>
									<FormSelect name="user_id" onChange={this.handleChange}>
										<option value="def">Seleccione al propietario</option>
										{this.users.map((user, i) => 
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

export default withRouter(CrearGasto)