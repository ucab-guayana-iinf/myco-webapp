import React, { Component } from 'react';
import GHeader from '../components/Utilities/GHeader/GHeader'
import MainSidebar from '../components/Utilities/MainSidebar/MainSidebar'
import Body from '../components/Gastos/Body'

class Gastos extends Component {
    
/*
            {
                id : '', 
                responsible_user_id : '',  
                amount : '',
                concept : '',
                creation_date: localStorage.getItem("creation_date")
            }
*/

    state = {
        expenses : [],
        total: 0
    }

    componentDidMount() {
        const query = localStorage.getItem("admin_id")

        fetch(`https://myco-backend.herokuapp.com/resident/expenses?user_id=${encodeURIComponent(query)}`, {
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
        })
        .catch(error => console.error('Hubo un error cargando las residencias:', error))
    }

    render() {
        return (
            <div className="gastos">
                <MainSidebar/>
                <GHeader title="Gastos"
                total={this.state.total}/>
                <Body title="Gastos" 
                expenses={this.state.expenses}
            />
            </div>
        );
    }

};

export default Gastos;