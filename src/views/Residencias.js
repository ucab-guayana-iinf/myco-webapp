import React, { Component } from 'react'
import GHeader from '../components/Utilities/GHeader/GHeader'
import MainSidebar from '../components/Utilities/MainSidebar/MainSidebar'
import Body from '../components/Residencias/Body'

class Residencias extends Component {

    state = {
        residencies: []
    }
    
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
                />
                <Body residencias={this.state.residencies} />
            </div>
        );
    }
}

export default Residencias;