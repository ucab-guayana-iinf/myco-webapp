import React from 'react';
import GHeader from '../components/Utilities/GHeader/GHeader'
import MainSidebar from '../components/Utilities/MainSidebar/MainSidebar'
import Body from '../components/Residencias/Body'

const Residencias = () => {

<<<<<<< HEAD
    const residenciActual = "Resi dencia";
    //se llamaria get /residencies
=======

    const residenciActual = "Loma Linda";
    //hacer fetch de residencies
    
>>>>>>> 0d9e991d2a457e88724a61e3463214e1ff495d8c
    const residencias = [
        {
            id: "e1ac73f8-c39e-46bc-b047-6bbd523acc4b",
            admin_id: "6bbd523acc4a-b047-46bc-c39e-",
            name: "Residencias Arivana",
            yardage: 2000,
            users: 60,
            properties: 43
        },
        {
            id: "e1ac73f8-c39e-46bc-b047-6bbd523acc4b",
            admin_id: "6bbd523acc4a-b047-46bc-c39e-",
            name: "Loma Linda",
            yardage: 2000,
            users: 50,
            properties: 35
        },
        {
            id: "e1ac73f8-c39e-46bc-b047-6bbd523acc4b",
            admin_id: "6bbd523acc4a-b047-46bc-c39e-",
            name: "La Cascada",
            yardage: 2000,
            users: 45,
            properties: 30
        },
        {
            id: "e1ac73f8-c39e-46bc-b047-6bbd523acc4b",
            admin_id: "6bbd523acc4a-b047-46bc-c39e-",
            name: "Apamate",
            yardage: 2000,
            users: 69,
            properties: 53
        }
    ]

    return (
        <div className="residencias">
            <MainSidebar/>
            <GHeader title="Residencias"
                residenciActual={residenciActual}
            />
            <Body residencias={residencias} />
        </div>
    );
};

export default Residencias;