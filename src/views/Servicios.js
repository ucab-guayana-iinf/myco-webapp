import React from 'react';
import GHeader from '../components/Utilities/GHeader/GHeader'
import MainSidebar from '../components/Utilities/MainSidebar/MainSidebar'
import Body from '../components/Servicios/Body'

const Servicios = () => {

    //Se obtiene el obj a partir de get /service?
    const servicios = [
        {
            id: 12345,
            price: 1300,
            name: 'Agua Potable',
            type: 'Basico'
        },
        {
            id: 12346,
            price: 5300,
            name: 'Luz',
            type: 'Basico'
        },
        {
            id: 12347,
            price: 1300,
            name: 'Reparacion de tuberias',
            type: 'Extraordinario'
        },
        {
            id: 12348,
            price: 2400,
            name: 'Gas',
            type: 'Basico'
        }

    ]

    return (
        <div className="servicios">
            <MainSidebar/>
            <GHeader 
                title="Servicios"
                tBasico={1000}
                tExtraordinario={1200}
                tMensual={6969}
            />
            <Body 
                title="Servicios"
                servicios={servicios}
            />
        </div>
    );
};

export default Servicios;