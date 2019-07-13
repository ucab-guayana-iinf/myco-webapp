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
                confirmacion:'',
            }
*/

    state = {
        payments: []
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