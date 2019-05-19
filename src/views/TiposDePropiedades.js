import React from 'react';
import GHeader from '../components/Utilities/GHeader/GHeader'
import MainSidebar from '../components/Utilities/MainSidebar/MainSidebar'

const TiposDePropiedades = () => {
    return (
        <div className="tipos-propiedades">
            <MainSidebar/>
            <GHeader ruta="Tipos de propiedades" title="Tipos de propiedades"/>
        </div>
    );
};

export default TiposDePropiedades;