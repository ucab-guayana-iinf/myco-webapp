import React from 'react';
import './assets/Header.css';

const Header = () => {

        return(
            <div className="header-body d-flex">

                <section className="header-left">
                </section>

                <section className="header-right text-center">
                    <h1 className="white big title">Titulo del Articulo</h1>
                    <p className="white text">
                        Lorem ipsum dolor sit ame reprehenderit facere. Quis omnis ab, aliqua
                        m eligendi harum neque temporibus, mollitia repudiandae quae, enim cupiditate. Rerum, consectetur neque.
                        m eligendi harum neque te.m eligendi harum neque temporibus, mollitia repudiandae quae, enim cupiditate. Rerum, consectetur neque.
                        m eligendi harum neque te. 
                    </p>
                    <div className="btn-container">
                        <button className="small myco-btn">Opcion 1</button>
                        <button className="small myco-btn">Opcion 2</button>
                    </div>
                </section>

                <section className="round-div"></section>

            </div>
        );
}

export default Header;