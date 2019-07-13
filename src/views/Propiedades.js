import React, { Component } from 'react';
import GHeader from '../components/Utilities/GHeader/GHeader'
import MainSidebar from '../components/Utilities/MainSidebar/MainSidebar'
import Body from '../components/Propiedades/Body'

class Propiedades extends Component {

    state = {
        properties: [],
        propertyTypes: []
    }

    users = []

    componentDidMount() { 
        //get para obtener las propiedades de la residencia seleccionada
        const query = localStorage.getItem("residency_id")

        fetch(`https://myco-backend.herokuapp.com/residency/properties?residency_id=${encodeURIComponent(query)}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + localStorage.getItem("token")
            }
        })
		.then(res => res.json())
		.then(res => {
            this.setState({
                properties: res.properties
            })
        })
        .catch(error => console.error('Hubo un error cargando las propiedades:', error))

        //get para filtrar los residentes a la hora de crear una nueva propiedad
        fetch("https://myco-backend.herokuapp.com/residency/residents", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + localStorage.getItem("token")
            }
        })
        .then(resJson => resJson.json())
		.then(res => {
			//filtrar los residentes
			res.residents.map((user, i) => {
				if(user.role === "RESIDENT") {
					this.users.push(user)
				}
            })
            console.log("users: ", this.users)
            localStorage.setItem("users", JSON.stringify(this.users)) //guardarlos en localstorage
        })
        .catch(error => console.error('Hubo un error filtrando los usuarios:', error))

        //get para obtener los tipos de propiedad de la residencia seleccionada
        fetch(`https://myco-backend.herokuapp.com/residency/property-types?residency_id=${encodeURIComponent(query)}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + localStorage.getItem("token")
            }
        })
		.then(res => res.json())
		.then(res => {
            console.log("tipos de propiedades (en propiedades)", res)
            this.setState({propertyTypes: res.property_types}) 
        })
        .catch(error => console.error('Hubo un error cargando los tipos de propiedades:', error))
    }

    propiedadesDefault = [
        {
            department_number : 'MH-30', 
            username : 'Jesus Perez',
            property_type_id : 'Penthouse',
            yardage : 'Pagado'
        },
        {
            department_number : 'MH-30', 
            username  : 'Jesus Perez',
            property_type_id : 'Penthouse',
            yardage : 'Pagado'
        },
        {
            department_number : 'MH-30', 
            username : 'Jesus Perez',
            property_type_id : 'Penthouse',
            yardage : 'Por Cobrar'
        },
        {
            department_number : 'MH-30', 
            username : 'Jesus Perez',
            property_type_id : 'Penthouse',
            yardage : 'Pagado'
        }
    ]

    Npropiedades = 99
    Npropietarios = 99
    Nendeudados = 99

    render() {
        return (
            <div className="propiedades">
                <MainSidebar/>
                <GHeader 
                    title="Propiedades"
                    propiedades={this.state.properties.length}
                    propietarios={this.users.length}
                    endeudados={this.Nendeudados}
                />
                <Body 
                    title="Propiedades" 
                    propiedades={this.state.properties}
                    users={this.users}
                    propertyTypes={this.state.propertyTypes}
                />
            </div>
        );
    }
}

export default Propiedades;