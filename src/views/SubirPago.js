import React, { Component } from 'react'
import GHeader from '../components/Utilities/GHeader/GHeader'
import MainSidebar from '../components/Utilities/MainSidebar/MainSidebar'
import Body from '../components/SubirPago/Body'

class SubirPago extends Component {

    
    render() {
        return (
            <div className="residencias">
                <MainSidebar/>
                <GHeader 
                    title="Formular Pago"
                />
                <Body/>
            </div>
        );
    }
}

export default SubirPago;