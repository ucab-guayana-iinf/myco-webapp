import React, {Component} from 'react';
import GHeader from '../components/Utilities/GHeader/GHeader'
import MainSidebar from '../components/Utilities/MainSidebar/MainSidebar'
import Body from '../components/CargarPago/Body.js'

class CargarPago extends Component{

/*
        body
            {
                user_id:'',
                bill_id:'',
                amount:'',
                payment_date:'',
                description:'',
                confirmation:''
            }
*/

    state = {
        payments: []
    }

    componentDidMount() {

        fetch(`https://myco-backend.herokuapp.com/residency/payments`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + localStorage.getItem("token")
            }
        })
		.then(res => res.json())
		.then(res => {
            console.log("respuesta cargarServicios", res)
            this.setState({payments:res.payments})
        })
        .catch(error => console.error('Hubo un error cargando los servicios:', error))
    }

    render(){
        return (
            <div className="cargar-pago">
                <MainSidebar/>
                <GHeader title="Cargar pago"/>
                <Body title="Cargar Pago"
                    payments = {this.state.payments}
                />
            </div>
        );
    }

};

export default CargarPago;