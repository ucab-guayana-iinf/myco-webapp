import React from 'react';
import GHeader from '../components/Utilities/GHeader/GHeader'
import MainSidebar from '../components/Utilities/MainSidebar/MainSidebar'

const Contabilidad = () => {
    return (
        <div className="contabilidad">
			<MainSidebar/>
            <GHeader title="Contabilidad"/>
        </div>
    );
};

export default Contabilidad;