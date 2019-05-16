import React from 'react';
import './assets/Header.css';

const Header = () => {

        return(
                <div className="visible-lg mt-n5 align-items-center header-body">

                    <section className="blob w-100">
                    </section>

                    <section className="info text-center px-0 mt-0">
                        <h1 className="white big title">Titulo de la promocion</h1>
                        <p className="white text">
                            Lorem ipsum dolor sit ame reprehenderit facere. Quis omnis ab, aliqua
                            m eligendi harum neque temporibus, mollitia repudiandae quae, enim cupiditate. Rerum, consectetur neque.
                            m eligendi harum neque te
                        </p>
                        <div className="btn-container">
                            <button className="small btn btn-secondary">opcion</button>
                            <button className="small btn btn-secondary">opcion</button>
                        </div>
                    </section>

                    <section className="round-div w-100"></section>

                </div>
        );
}

export default Header;