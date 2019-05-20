import React from 'react';
import GHeader from '../components/Utilities/GHeader/GHeader'
import MainSidebar from '../components/Utilities/MainSidebar/MainSidebar'
import Body from '../components/Propiedades/Body'

const Propiedades = () => {
    
    const titulos = ['Numero','Nombre','Yardage']

    //Simulacion de los objetos que se obtienen del backend
    const propiedades = [
        {
            department_number : 'MH-30', 
            username : 'Jesus Perez',
            property_type_id : 'Penthouse',
            yardage : 'Pagado'
        },
        {
            department_number : 'MH-30', 
            username  : 'Jesus Perez',
            property_type_id : 'Penthouse',
            yardage : 'Pagado'
        },
        {
            department_number : 'MH-30', 
            username : 'Jesus Perez',
            property_type_id : 'Penthouse',
            yardage : 'Pagado'
        },
        {
            department_number : 'MH-30', 
            username : 'Jesus Perez',
            property_type_id : 'Penthouse',
            yardage : 'Pagado'
        }
    ]

    const Npropiedades = 34
    const Npropietarios = 45
    const Nendeudados = 4

    return (
        <div className="propiedades">
            <MainSidebar/>
            <GHeader 
                title="Propiedades"
                propiedades={Npropiedades}
                propietarios={Npropietarios}
                endeudados={Nendeudados}
            />
            <Body title="Propiedades" propiedades={propiedades} titulos={titulos}/>
        </div>
    );
};

export default Propiedades;