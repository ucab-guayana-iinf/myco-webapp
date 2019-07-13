import React, { Component } from 'react'
import GHeader from '../components/Utilities/GHeader/GHeader'
import MainSidebar from '../components/Utilities/MainSidebar/MainSidebar'
import Body from '../components/Deudas/Body'

class Deudas extends Component {

    render() {
        return (
            <div>
                <MainSidebar/>
                <GHeader 
                    title="Ver Deudas"
                />
                <Body/>
            </div>
        );
    }
}

export default Deudas;