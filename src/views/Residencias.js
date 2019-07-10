import React, { Component } from 'react'
import GHeader from '../components/Utilities/GHeader/GHeader'
import MainSidebar from '../components/Utilities/MainSidebar/MainSidebar'
import Body from '../components/Residencias/Body'

class Residencias extends Component {

    state = {
        residencies: []
    }

    residenciActual = "Loma Linda";
    
    residenciasDefault = [
        {
            id: "e1ac73f8-c39e-46bc-b047-6bbd523acc4b",
            admin_id: "6bbd523acc4a-b047-46bc-c39e-",
            name: "Residencias Arivana",
            yardage: 2000,
            users: 60,
            properties: 43
        },
        {
            id: "e1ac73f8-c39e-46bc-b047-6bbd523acc4b",
            admin_id: "6bbd523acc4a-b047-46bc-c39e-",
            name: "Loma Linda",
            yardage: 2000,
            users: 50,
            properties: 35
        },
        {
            id: "e1ac73f8-c39e-46bc-b047-6bbd523acc4b",
            admin_id: "6bbd523acc4a-b047-46bc-c39e-",
            name: "La Cascada",
            yardage: 2000,
            users: 45,
            properties: 30
        },
        {
            id: "e1ac73f8-c39e-46bc-b047-6bbd523acc4b",
            admin_id: "6bbd523acc4a-b047-46bc-c39e-",
            name: "Apamate",
            yardage: 2000,
            users: 69,
            properties: 53
        }
    ]
    
    componentDidMount() {
        const query = localStorage.getItem("admin_id")

        fetch(`https://myco-backend.herokuapp.com/residency/residencies?admin_id=${encodeURIComponent(query)}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + localStorage.getItem("token")
            }
        })
		.then(res => res.json())
		.then(res => {
            console.log("respuesta cargarResidencias", res)
            this.setState({residencies: res.residency}) //en res.residency esta el array con las residencias
            //console.log(this.state.residencies) descomenta esto si quieres ver que trajo el array
        })
        .catch(error => console.error('Hubo un error cargando las residencias:', error))
    }

    render() {
        return (
            <div className="residencias">
                <MainSidebar/>
                <GHeader 
                    title="Residencias"
                    residenciActual={this.residenciActual}
                />
                <Body residencias={this.state.residencies} />
            </div>
        );
    }
}

export default Residencias;