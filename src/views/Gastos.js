import React, { Component } from 'react';
import GHeader from '../components/Utilities/GHeader/GHeader'
import MainSidebar from '../components/Utilities/MainSidebar/MainSidebar'
import Body from '../components/Gastos/Body'

class Gastos extends Component {

    state = {
        expenses : [],
        total: 0
    }

    componentDidMount() {
        const users = JSON.parse(localStorage.getItem("users"))
        //ciclo para mostrar los gastos de todo el mundo xd
        for (let i=0; i<users.length ; i++) {
            let query = users[i].id
            console.log("buscando gastos de id", query)
            fetch(`https://myco-backend.herokuapp.com/residency/expense?user_id=${encodeURIComponent(query)}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'bearer ' + localStorage.getItem("token")
                }
            })
            .then(res => res.json())
            .then(res => {
                console.log("respuesta cargar gastos[",i,"] ", res.expense)
                res.expense.map((gasto)=> {
                    this.setState({
                        expenses: [...this.state.expenses, gasto],
                        total: this.state.total + gasto.amount
                    })         
                })
            })
            .catch(error => console.error('Hubo un error cargando los gastos:', error))
        }
    }

    render() {
        return (
            <div className="gastos">
                <MainSidebar/>
                <GHeader 
                    title="Gastos"
                    total={this.state.total}
                />
                <Body 
                    title="Gastos" 
                    expenses={this.state.expenses}
                />
                {console.log("state: ",this.state.expenses)}
            </div>
        );
    }

};

export default Gastos;