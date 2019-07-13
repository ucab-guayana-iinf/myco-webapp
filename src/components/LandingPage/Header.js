import React from 'react';
import './assets/Header.css';

const Header = () => {

        return(
                <div className="visible-lg mt-n5 align-items-center header-body">

                    <section className="blob w-100">
                        <div className="mycopic"></div>
                    </section>

                    <section className="info text-center px-0 mt-0">
                        <h1 className="white big title">Moderniza tu condominio</h1>
                        <p className="white text">
                            Convivir en un condominio jamas fue tan facil,
                            Myco te ofrece herramientas tecnologicas multiplataformas que facilitan el dia a dia 
                            de la administracion de condominios, olvidate de cuadernos, recibos manuales y 
                            tediosas hojas de calculo.
                        </p>
                    </section>

                    <section className="round-div w-100"></section>

                </div>
        );
}

export default Header;