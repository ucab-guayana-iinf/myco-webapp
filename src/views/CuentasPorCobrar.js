import React from 'react';
import GHeader from '../components/Utilities/GHeader/GHeader'
import MainSidebar from '../components/Utilities/MainSidebar/MainSidebar'
import Body from '../components/CuentasPorCobrar/Body.js'

const CuentasPorCobrar = () => {

    const propsEnMora = 5;
    const deudaAvg = 13000;
    const totalPorCobrar = 67000;

    const cuentasPorCobrar = [
        {
            department_number : 'NC-18',
            username : 'Rafael Rodriguez',
            alicuota : 1.5,
            price : 13000
        },
        {
            department_number : 'MH-21',
            username : 'Rafael Rodriguez',
            alicuota : 1.5,
            price : 13000
        },
        {
            department_number : 'MH-22',
            username : 'Rafael Rodriguez',
            alicuota : 0.5,
            price : 13000
        },
        {
            department_number : 'ND-23',
            username : 'Rafael Rodriguez',
            alicuota : 0.8,
            price : 13000
        },
        {
            department_number : 'MZ-34',
            username : 'Rafael Rodriguez',
            alicuota : 0.8,
            price : 13000
        },
    ]

    return (
        <div className="cuentaspc">
            <MainSidebar/>
            <GHeader title="Cuentas por cobrar"
                propsEnMora={propsEnMora}
                deudaAvg={deudaAvg}
                totalPorCobrar={totalPorCobrar}
            />
            <Body title="Cuentas por cobrar"
                cuentasPorCobrar={cuentasPorCobrar}/>
        </div>
    );
};

export default CuentasPorCobrar;