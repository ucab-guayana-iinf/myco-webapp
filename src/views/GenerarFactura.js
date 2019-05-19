import React from 'react';
import MainSidebar from '../components/Utilities/MainSidebar/MainSidebar'
import GHeader from '../components/Utilities/GHeader/GHeader'

const GenerarFactura = () => {
    return (
        <div className="generar-factura">
            <MainSidebar/>
            <GHeader ruta="Residencia  > Generar Factura" title="Generar Factura"/>
        </div>
    );
};

export default GenerarFactura;