import React, { Component } from 'react';
import MycoCard from '../Utilities/MycoCard/MycoCard';
import './assets/Body.css'

export default class Residencias extends Component {
    
    addResidency = () => {
        //fetch para crear residencia (hay que pedirle al usuario los datos en un modal y crear el objeto) NO SIRVEAAAAA
        fetch("https://myco-backend.herokuapp.com/residency/create", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'bearer' + ' ' + localStorage.getItem('token') ,
                'Access-Control-Allow-Headers': "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
            },
            body: JSON.stringify({
                admin_id: "idjuan", //npi de donde sacar la id del admin
	            name: "residenciaCreada",
	            yardage: "6969"
            })
        })
        .then(resJ => {
            return resJ.json()
            //return resJ.json() aqui se produciria el error "SyntaxError: Unexpected token R in JSON at position 0" y se va al catch
        })
        .then(res => { //no envio nada desde el then anterior para que no se vaya al catch y se logee
            console.log('resultado de crear residencia ', res)   //logearse luego de registrarse
        })
        .catch(error => console.error('Hubo un error creando la residencia:', error))
    }

    render() { //el boton antes era un <a href="javascript:void(0)"> lo cambie para llamar la funcion
        return (    
            <div className="admin text-center">
                <div className="add-property navy medium mb-4">
                    <span className="title medium mr-2 align-middle">Añadir Residencia</span> 
                    <button style={{backgroundColor: 'transparent', border: 'none'}} onClick={this.addResidency}>
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