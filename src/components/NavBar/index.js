import React, {Component} from 'react';
import './NavBar.css';

export default class NavBar extends Component {

    state = {
        options : ['Iniciar sesion','Como empezar']
    }

    render() {
        const {options} = this.state
        return ( 
            <div className="navbar-bg">
                <nav className="navbar d-flex flex-row">
                    <a href="/Home" className="navbar-option">logo</a>
                    <div>
                        {options.map((option,i)=>{
                            return <a key={i} href="/" className="navbar-option">{option}</a>
                        })
                        }
                    </div>
                </nav>
            </div>
        );
    }
}