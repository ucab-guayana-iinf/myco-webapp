import React, { Component } from 'react';
import GHeader from '../components/Utilities/GHeader/GHeader'
import MainSidebar from '../components/Utilities/MainSidebar/MainSidebar'
import Body from '../components/Servicios/Body'

class Servicios extends Component {

    state = {
        services: []
    }

    componentDidMount() {
        const query = localStorage.getItem("residency_id")

        fetch(`https://myco-backend.herokuapp.com/residency/service?residency_id=${encodeURIComponent(query)}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + localStorage.getItem("token")
            }
        })
		.then(res => res.json())
		.then(res => {
            console.log("respuesta cargarServicios", res)
            this.setState({services: res.services}) 
        })
        .catch(error => console.error('Hubo un error cargando los servicios:', error))
    }

    //Se obtiene el obj a partir de get /service?
    serviciosDefault = [
        {
            id: 12345,
            price: 1300,
            name: 'Agua Potable',
            type: 'Basico'
        },
        {
            id: 12346,
            price: 5300,
            name: 'Luz',
            type: 'Basico'
        },
        {
            id: 12347,
            price: 1300,
            name: 'Reparacion de tuberias',
            type: 'Extraordinario'
        },
        {
            id: 12348,
            price: 2400,
            name: 'Gas',
            type: 'Basico'
        }

    ]

    render() {
        return (
            <div className="servicios">
                <MainSidebar/>
                <GHeader 
                    title="Servicios"
                    tBasico={1000}
                    tExtraordinario={1200}
                    tMensual={6969}
                />
                <Body 
                    title="Servicios"
                    servicios={this.state.services}
                />
            </div>
        );
    }
}

export default Servicios;