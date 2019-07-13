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
        
        //get para las residencias del admin
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
            this.setState({residencies: res.residency}) 
        })
        .catch(error => console.error('Hubo un error cargando las residencias:', error))

        //get para filtrar los residentes
        let users = []
        fetch("https://myco-backend.herokuapp.com/residency/residents", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + localStorage.getItem("token")
            }
        })
        .then(res => res.json())
		.then(res => {
			//filtrar los residentes
			res.residents.map((user, i) => {
				if(user.role === "RESIDENT") {
					users.push(user)
				}
            })
            console.log("users guardados en local: ", users)
            localStorage.setItem("users", JSON.stringify(users)) //guardarlos en localstorage
        })
        .catch(error => console.error('Hubo un error filtrando los usuarios:', error))

        var fecha = new Date() //fecha del dia de hoy
        fecha = fecha.toISOString().slice(0,10)//se pasa a formato ISO
        localStorage.setItem("creation_date", fecha)//se guarda en almacenamiento local
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