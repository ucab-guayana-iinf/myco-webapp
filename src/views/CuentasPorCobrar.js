import React from 'react';
import GHeader from '../components/Utilities/GHeader/GHeader'
import MainSidebar from '../components/Utilities/MainSidebar/MainSidebar'

const CuentasPorCobrar = () => {
    return (
        <div className="cuentaspc">
            <MainSidebar/>
            <GHeader ruta="Cuentas por cobrar" title="Cuentas por cobrar"/>
        </div>
    );
};

export default CuentasPorCobrar;