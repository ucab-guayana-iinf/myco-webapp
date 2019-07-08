import React from 'react';
import GHeader from '../components/Utilities/GHeader/GHeader'
import MainSidebar from '../components/Utilities/MainSidebar/MainSidebar'

const IngresosYegresos = () => {
    return (
        <div className="IngresosYegresos">
			<MainSidebar/>
            <GHeader title="Ingresos y Egresos"/>
        </div>
    );
};

export default IngresosYegresos;