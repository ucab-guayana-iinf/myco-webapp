import React from 'react';
import GHeader from '../components/Utilities/GHeader/GHeader'
import MainSidebar from '../components/Utilities/MainSidebar/MainSidebar'
const Propiedades = () => {
    return (
        <div className="propiedades">
            <MainSidebar/>
            <GHeader ruta="Propiedades" title="Propiedades"/>
        </div>
    );
};

export default Propiedades;