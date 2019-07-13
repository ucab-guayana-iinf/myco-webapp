import React, { Component } from 'react';
import './assets/Body.css';

export default class Body extends Component {

    state = {
        titulos : ['Crea una residencia','Crea tus tipos de propiedades','Agrega residentes!!'],
    }

    render() {
        return (        
            <div className="body">
                <h1 className="big navy title">3 sencillos pasos</h1>
                <div className="body-container ">
                            <div className="mb-5 blockcontainer">
                                
                                <div className="bloque-azul uno ">
                                    <span className="medium aquamarine title">1</span>
                                </div>

                                <section className="navy medium title text-center">
                                    {this.state.titulos[0]}
                                </section>
                                
                            </div>
                            <div className="mb-5 blockcontainer">
                                
                                <div className="bloque-azul dos">
                                    <span className="medium aquamarine title">2</span>
                                </div>

                                <section className="navy medium title text-center">
                                {this.state.titulos[1]}
                                </section>
                                
                            </div>
                            <div className="mb-5 blockcontainer">
                                
                                <div className="bloque-azul tres">
                                    <span className="medium aquamarine title">3</span>
                                </div>

                                <section className="navy medium title text-center">
                                {this.state.titulos[2]}
                                </section>
                                
                            </div>
                </div>
            </div>
        );
    }
}
