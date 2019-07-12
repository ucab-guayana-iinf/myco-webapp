import React, {Component} from 'react';
import GHeader from '../components/Utilities/GHeader/GHeader'
import MainSidebar from '../components/Utilities/MainSidebar/MainSidebar'
import Body from '../components/TiposDePropiedades/Body'

class TiposDePropiedades extends Component {

    state = {
        propertyTypes: []
    }

    componentDidMount() {
        const query = localStorage.getItem("residency_id")

        fetch(`https://myco-backend.herokuapp.com/residency/property-types?residency_id=${encodeURIComponent(query)}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + localStorage.getItem("token")
            }
        })
		.then(res => res.json())
		.then(res => {
            console.log("respuesta tipo de propiedades", res)
            this.setState({propertyTypes: res.property_types}) //en res.residency esta el array con las residencias
            //console.log(this.state.residencies) descomenta esto si quieres ver que trajo el array
        })
        .catch(error => console.error('Hubo un error cargando las residencias:', error))
    }

    render() {
        return (
            <div className="tipos-propiedades">
                <MainSidebar/>
                <GHeader title="Tipos de propiedades"/>
                <Body propertyTypes={this.state.propertyTypes}/>
            </div>
        );
    }
};

export default TiposDePropiedades;