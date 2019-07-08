import React, { Component } from 'react';
import MycoCard from '../Utilities/MycoCard/MycoCard';
import './assets/Body.css'

export default class Residencias extends Component {
    
    addResidency = () => {
        //fetch para crear residencia (hay que pedirle al usuario los datos en un modal y crear el objeto)  
        fetch("https://myco-backend.herokuapp.com/residency/create", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify({ //objeto de prueba
                admin_id: "idprueba", //el admin id hay que sacarlo del localstorage cuando podamos guardarlo en el login xd
                name: "residenciaCreada",
                yardage: "6969"
            })
        })
        .then(res => res.json()) 
        .then(res => { 
            console.log('respuesta crear residencia: ', res)  
        })
        .catch(error => console.error('Hubo un error creando la residencia:', error))
    }

    addResidency2 = () => {
        fetch("https://myco-backend.herokuapp.com/residency/residencies?residency_id=1", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + localStorage.getItem('token')
            }
            
        })
        .then(res => res.text()) 
        .then(res => { 
            console.log('respuesta crear residencia: ', res)  
        })
        .catch(error => console.error('Hubo un error con el get de la residencia:', error))
    }
    
    render() { //el boton antes era un <a href="javascript:void(0)"> lo cambie para llamar la funcion
        return (    
            <div className="admin text-center">
                <div className="add-property navy medium mb-4">
                    <span className="title medium mr-2 align-middle">Añadir Residencia</span> 
                    <button style={{backgroundColor: 'transparent', border: 'none'}} onClick={this.addResidency2}>
                        <i className="aquamarine material-icons align-middle">add_circle</i>
                    </button>
                </div>
                <div className="fill residencias-body">
                    {this.props.residencias.map( (residencia,i) => 
                        <MycoCard key={i} residencia={residencia}/>
                    )}
                </div>

            </div>
        );
    }
}