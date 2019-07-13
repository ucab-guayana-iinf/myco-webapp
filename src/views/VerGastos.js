import React, { Component } from 'react'
import GHeader from '../components/Utilities/GHeader/GHeader'
import MainSidebar from '../components/Utilities/MainSidebar/MainSidebar'
import Body from '../components/VerGastos/Body'

class VerGastos extends Component {

    state = {
        expenses : []
    }

    componentDidMount() {
        const query = localStorage.getItem("admin_id")
        
        fetch(`https://myco-backend.herokuapp.com/residency/expense?user_id=${encodeURIComponent(query)}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + localStorage.getItem("token")
            }
        })
		.then(res => res.json())
		.then(res => {
            console.log("respuesta gastos", res)
            this.setState({expenses: res.expense}) 
        })
        .catch(error => console.error('Hubo un error cargando los gastos:', error))
    }

    render() {
        return (
            <div>
                <MainSidebar/>
                <GHeader 
                    title="Ver Gastos"
                />
                <Body title="Ver Gastos"
                expenses={this.state.expenses}/>
            </div>
        );
    }
}

export default VerGastos;