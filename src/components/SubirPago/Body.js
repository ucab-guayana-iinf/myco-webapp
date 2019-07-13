import React, { Component } from 'react';
import { InputGroup, InputGroupText, InputGroupAddon, Form, FormGroup, FormInput} from 'shards-react'

export default class Body extends Component {

    state = {
        bill_id : '', 
        amount : '',
        description : '',
        user_id: localStorage.getItem("admin_id")
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
        if (this.state.bill_id === '' || this.state.amount === '' || this.state.description === '') {
            alert('debes llenar ambos campos')
            return
        }
        //post para crear residencia
		fetch("https://myco-backend.herokuapp.com/residency/payments", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + localStorage.getItem("token")
            },
            body: JSON.stringify(this.state)
        })
		.then(res => res.text())
		.then(res => {
			console.log("respuesta subir pago",  res)
        })
        .catch(error => console.error('Hubo un error subiendo el pago:', error))
    }

    render() {
        return (    
            <div className="admin text-center">
                <Form onSubmit={this.fetchData} className="ml-5 mx-auto mr-5 pl-5 pr-5 w-50">
					<FormGroup>
					    <InputGroup className="mb-1">
							<InputGroupAddon type="prepend" >
								<InputGroupText className="navy">Descripcion</InputGroupText>
							</InputGroupAddon>
							<FormInput size="med" type="text" name="description" placeholder="Descripcion de pago" onChange={this.handleChange} />
						</InputGroup>
					</FormGroup>
					<FormGroup>
					    <InputGroup className="mb-1">
							<InputGroupAddon type="prepend" >
								<InputGroupText className="navy">Codigo de Recibo Bancario</InputGroupText>
							</InputGroupAddon>
							<FormInput size="med" type="text" name="bill_id" placeholder="Codigo Recibo" onChange={this.handleChange} />
						</InputGroup>
					</FormGroup>
					<FormGroup>
						<InputGroup className="mb-1">
							<InputGroupAddon type="prepend" >
							<InputGroupText className="navy">Costo</InputGroupText>
							</InputGroupAddon>
						<FormInput size="med" type="text" name="amount" placeholder="2000" onChange={this.handleChange} />
						</InputGroup>
					</FormGroup>
                    <button type="submit" className="btn btn-primary">Subir</button>
				</Form>
            </div>
        );
    }
}