import React, { Component } from 'react';
import GHeader from '../components/Utilities/GHeader/GHeader'
import MainSidebar from '../components/Utilities/MainSidebar/MainSidebar'
import Body from '../components/Gastos/Body'

class Gastos extends Component {
    state = {
        propiedades : [
            {
                department_number : 'MH-30', 
                username : 'Jesus Perez',
                property_type_id : 'Penthouse',
                yardage : 'Pagado'
            },
            {
                department_number : 'MH-30', 
                username  : 'Jesus Perez',
                property_type_id : 'Penthouse',
                yardage : 'Pagado'
            },
            {
                department_number : 'MH-30', 
                username : 'Jesus Perez',
                property_type_id : 'Penthouse',
                yardage : 'Por Cobrar'
            },
            {
                department_number : 'MH-30', 
                username : 'Jesus Perez',
                property_type_id : 'Penthouse',
                yardage : 'Pagado'
            }
        ]
    }

    render() {
        return (
            <div className="gastos">
                <MainSidebar/>
                <GHeader title="Gastos"
                total=''/>
                <Body title="Propiedades" 
                propiedades={this.state.propiedades}
            />
            </div>
        );
    }

};

export default Gastos;