import React from 'react';
import GHeader from '../components/Utilities/GHeader/GHeader'
import MainSidebar from '../components/Utilities/MainSidebar/MainSidebar'

const CargarPago = () => {
    return (
        <div className="contabilidad">
			<MainSidebar/>
            <GHeader title="Cargar pago"/>
        </div>
    );
};

export default CargarPago;