import React, { Component } from 'react';
import GHeader from '../components/Utilities/GHeader/GHeader'
import MainSidebar from '../components/Utilities/MainSidebar/MainSidebar'
import Body from '../components/Servicios/Body'
import { parse } from 'path';

class Servicios extends Component {

    state = {
        services: [],
        tBasico: 0,
        tExtra : 0
    }

    componentDidMount() {
        const query = localStorage.getItem("residency_id")

        fetch(`https://myco-backend.herokuapp.com/residency/service?residency_id=${encodeURIComponent(query)}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + localStorage.getItem("token")
            }
        })
		.then(res => res.json())
		.then(res => {
            console.log("respuesta cargarServicios", res)
            this.setState({services: res.services}) 

            var basicoAcum = 0
            var extraordinarioAcum = 0
            this.state.services.map((service,i) => {
                if(service.type === 0){
                    basicoAcum += service.price
                }else{
                    extraordinarioAcum += service.price
                }
            })
            this.setState({tBasico : basicoAcum})
            this.setState({tExtra : extraordinarioAcum})

        })
        .catch(error => console.error('Hubo un error cargando los servicios:', error))
    }


    render() {
        return (
            <div className="servicios">
                <MainSidebar/>
                <GHeader 
                    title="Servicios"
                    tBasico={this.state.tBasico}
                    tExtraordinario={this.state.tExtra}
                    tMensual={this.state.tBasico + this.state.tExtra}
                />
                <Body 
                    title="Servicios"
                    servicios={this.state.services}
                />
            </div>
        );
    }
}

export default Servicios;