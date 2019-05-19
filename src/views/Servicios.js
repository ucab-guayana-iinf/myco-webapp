import React from 'react';
import GHeader from '../components/Utilities/GHeader/GHeader'
import MainSidebar from '../components/Utilities/MainSidebar/MainSidebar'
const Servicios = () => {
    return (
        <div className="servicios">
            <MainSidebar/>
            <GHeader ruta="Servicios" title="Servicios"/>
        </div>
    );
};

export default Servicios;