import React, { Component } from 'react'
import GHeader from '../components/Utilities/GHeader/GHeader'
import MainSidebar from '../components/Utilities/MainSidebar/MainSidebar'
import Body from '../components/Recibos/Body'

class Recibos extends Component {

    render() {
        return (
            <div className="residencias">
                <MainSidebar/>
                <GHeader 
                    title="Ver Recibos"
                />
                <Body/>
            </div>
        );
    }
}

export default Recibos;