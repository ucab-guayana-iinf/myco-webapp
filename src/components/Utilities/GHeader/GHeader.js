import React, { Component } from 'react';
import './assets/GHeader.css'
import NavBar from '../NavBar/NavBar'
import { withRouter } from 'react-router-dom'

class GHeader extends Component { 
    
    logoff = () => {
        localStorage.clear()
        console.log("sesion cerrada")
        this.props.history.push('/Landing')
    }

    viewCheck = (title) => {
        var logged = localStorage.getItem("logged")
        if(logged){
            switch(title){
                case 'Propiedades': {
                    return (
                        <React.Fragment>
                            <div className="white text-center mt-n3">
                                <div className="mb-n3 mt-n4">
                                    <span className="navy medium title">{this.props.propiedades}</span> inmuebles <span className="ml-4">&nbsp;&nbsp;</span>
                                    <span className="navy medium title">{this.props.propietarios}</span> propietarios
                                    <br/>
                                </div>
                                <span className="navy medium title"> {this.props.endeudados} </span> <span className="white"> propietarios en mora</span>
                            </div>
                        </React.Fragment>
                    )
                }
                case 'Residencias': {
                    return (
                    <React.Fragment>
                        <div className="white text-center">
                            Selecciona una de tus residencias para administrar<br></br>
                            Residencia actual : <span className="navy medium title"> {localStorage.getItem("residenciActual")}</span>
                        </div>    
                    </React.Fragment>
                    )  
                }
                case 'Ingresos y Egresos': {
                    return <div></div>
                }
                case 'Cuentas por cobrar': {
                    return (
                        <React.Fragment>
                            <div className="white text-center mt-n3">
                                <div className="mb-n3 mt-n4">
                                    <span className="navy medium title">{this.props.propsEnMora} </span> Propietarios en mora <span className="ml-2">&nbsp;&nbsp;</span> Se deben
                                    <span className="navy medium title"> Bs. {this.props.deudaAvg}</span> por propietario
                                    <br/>
                                </div>
                                <span className="bold white"> Total por cobrar</span> <span className="navy medium title"> Bs. {this.props.totalPorCobrar}</span>
                            </div>
                        </React.Fragment>)
                }
                case 'Generar factura': {
                    return <div></div>
                }
                case 'Servicios': {
                    return (
                        <React.Fragment>
                            <div className="white text-center">
                                Total basico <span className="navy bold">Bs. {this.props.tBasico}</span>&nbsp;&nbsp;&nbsp;&nbsp; Total extraordinario <span className="navy bold">Bs. {this.props.tExtraordinario}</span> 
                                <br></br>
                                <span className="bold">Total mensual </span><span className="navy medium title">Bs. {this.props.tMensual}</span>
                            </div>    
                        </React.Fragment>)
                }
                case 'Tipos de propiedades': {
                    return (
                        <React.Fragment>
                            <div className="white text-center">
                                Tipos de propiedades en<br></br>
                                <span className="navy medium title"> {localStorage.getItem("residenciActual")}</span>
                            </div>    
                        </React.Fragment>
                        )  
                }
                case 'Cargar pago': {
                    return <div></div>
                }
                default:{
                    break;
                }
            }
        }else{
            this.props.history.push('/Landing')
        }
    }

    render() {
        const {title} = this.props;

        return(
            <React.Fragment>
                <div className="gnav">
                    <NavBar/>
                </div>
                
                <div className="gheader"> 
                    <div className="ground-div">
                        <div className="white text">Residencia<span className="navy bold"> > {title} </span></div>  
                        <div className="white big title">{title}</div>
                        {this.viewCheck(title)}
                    </div>
                    <div onClick={this.logoff}><i className="navy bold big material-icons mt-2 ml-5 logoff" >exit_to_app</i></div>
                    
                </div>
            </React.Fragment>
        )
    }

}

export default withRouter(GHeader)