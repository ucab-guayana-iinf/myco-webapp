import React, { Component } from 'react'
import {Card, CardBody, Modal, InputGroup, InputGroupText, InputGroupAddon,ModalHeader, Form, FormGroup, FormInput} from 'shards-react'
import { withRouter } from 'react-router-dom'

class CrearResidencia extends Component {

    state = {
        admin_id : '123', //obtener de localstorage almacenar cuando se logee
        name : '',
        yardage : ''
	}
	
	obj = {
        admin_id : '1', //obtener de localstorage almacenar cuando se logee
        name : 'casa',
        yardage : 300		
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
        if (this.obj.name === '' || this.obj.yardage === '') {
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
            body: JSON.stringify(this.obj)
        })
		.then(resJson => resJson.json())
		.then(res => {
            console.log("Residencia creada",this.state)
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

export default withRouter(CrearResidencia)