import React from 'react';
import GHeader from '../components/Utilities/GHeader/GHeader'
import MainSidebar from '../components/Utilities/MainSidebar/MainSidebar'

const Gastos = () => {
    return (
        <div className="gastos">
			<MainSidebar/>
            <GHeader title="Gastos"/>
        </div>
    );
};

export default Gastos;