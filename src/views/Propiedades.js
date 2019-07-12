import React, { Component } from 'react';
import GHeader from '../components/Utilities/GHeader/GHeader'
import MainSidebar from '../components/Utilities/MainSidebar/MainSidebar'
import Body from '../components/Propiedades/Body'

class Propiedades extends Component {

    state = {
        Propiedades: []
    }

    componentDidMount() { //weno aqui deberia estar el end para obtener las propiedades de la residencia seleccionada
        const query = localStorage.getItem("residency_id")

        fetch(`https://myco-backend.herokuapp.com/residency/UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUH?admin_id=${encodeURIComponent(query)}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + localStorage.getItem("token")
            }
        })
		.then(res => res.json())
		.then(res => {
           
        })
        .catch(error => console.error('Hubo un error cargando las propiedades:', error))
    }

    //se llamaria get /users y get /properties
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

    Npropiedades = 34
    Npropietarios = 45
    Nendeudados = 4

    render() {
        return (
            <div className="propiedades">
                <MainSidebar/>
                <GHeader 
                    title="Propiedades"
                    propiedades={this.Npropiedades}
                    propietarios={this.Npropietarios}
                    endeudados={this.Nendeudados}
                />
                <Body 
                    title="Propiedades" 
                    propiedades={this.propiedadesDefault}
                />
            </div>
        );
    }
};

export default Propiedades;