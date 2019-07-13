import React, {Component} from 'react';
import GHeader from '../components/Utilities/GHeader/GHeader'
import MainSidebar from '../components/Utilities/MainSidebar/MainSidebar'
import Body from '../components/CuentasPorCobrar/Body.js'

class CuentasPorCobrar extends Component {


/*
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