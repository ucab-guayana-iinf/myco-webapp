import React, { Component } from 'react';
import GHeader from '../components/Utilities/GHeader/GHeader'
import MainSidebar from '../components/Utilities/MainSidebar/MainSidebar'
import Body from '../components/Gastos/Body'

class Gastos extends Component {
    state = {
        expenses : [
            {
                id : '', 
                responsible_user_id : '',  
                amount : '1000',
                concept : 'boy',
                creation_date: localStorage.getItem("creation_date")
            },
            {
                id : '', 
                responsible_user_id : '',  
                amount : '421',
                concept : 'gang',
                creation_date: localStorage.getItem("creation_date")
            },
            {
                id : '', 
                responsible_user_id : '',  
                amount : '3423',
                concept : 'damn',
                creation_date: localStorage.getItem("creation_date")
            }

        ],
        total: 'nose wn'
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