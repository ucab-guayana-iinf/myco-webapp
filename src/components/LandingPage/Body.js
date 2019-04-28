import React, { Component } from 'react';
import '../../assets/Body.css';

export default class Body extends Component {

    state = {
        titulos : ['1','2','3']
    }

    render() {
        return (        
            <div className="body">
                <h1 className="big black title">Algun titulo pero largo</h1>
                <div className="body-container ">
                    {this.state.titulos.map((titulo,i) =>{
                        return  (
                            <div key={i} className="mb-5">
                                
                                <div className="bloque-azul">
                                    <span className="medium aquamarine title">{i+1}</span>
                                </div>

                                <section className="gray text mx-auto">
                                    Lorem ipsum dolor sit ame reprehenderit facere. Quis omnis ab, aliqua
                                    m eligendi harum neque temporibus, molarum neque temporibus, molli
                                </section>
                                
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}
