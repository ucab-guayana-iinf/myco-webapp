import React, {Component} from 'react';
import GHeader from '../components/Utilities/GHeader/GHeader'
import MainSidebar from '../components/Utilities/MainSidebar/MainSidebar'
import Body from '../components/CuentasPorCobrar/Body.js'

class CuentasPorCobrar extends Component {


/*
        body
            {
                property_id : '',
                amount : '',
                description : '',
                creation_date : ''
            }
*/

    state = {
        debts : [],
        propsEnMora : 0,
        deudaAvg : 0,
        totalPorCobrar : 0
    }

    componentDidMount() {
        const query = localStorage.getItem("residency_id")
        fetch(`https://myco-backend.herokuapp.com/residency/debts?residency_id=${encodeURIComponent(query)}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + localStorage.getItem("token")
            }
        })
		.then(res => res.json())
		.then(res => {
            console.log("respuesta cargarServicios", res)
        })
        .catch(error => console.error('Hubo un error cargando los servicios:', error))
    }

    render(){
        return (
            <div className="cuentaspc">
                <MainSidebar/>
                <GHeader title="Cuentas por cobrar"
                    propsEnMora={this.state.propsEnMora}
                    deudaAvg={this.state.deudaAvg}
                    totalPorCobrar={this.state.totalPorCobrar}
                />
                <Body title="Cuentas por cobrar"
                    debts={this.state.debts}/>
            </div>
        );
    }

};

export default CuentasPorCobrar;