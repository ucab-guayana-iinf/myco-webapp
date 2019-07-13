import React from 'react'
import { Redirect } from "react-router-dom"

// Todas las vistas de la pagina
import LandingPage from './views/LandingPage'
import Gastos from './views/Gastos'
import Servicios from './views/Servicios'
import GenerarFactura from './views/GenerarFactura'
import Propiedades from './views/Propiedades'
import Residencias from './views/Residencias'
import CuentasPorCobrar from './views/CuentasPorCobrar'
import TiposDePropiedades from './views/TiposDePropiedades'
import CargarPago from './views/CargarPago';
import Deudas from './views/Deudas';
import Recibos from './views/Recibos';
import SubirPago from './views/SubirPago';
import VerGastos from './views/VerGastos';

//arr de obj de rutas de cada pagina
export default [
    {
        path: '/',
        exact: true,
        component: () => <Redirect to="/Landing" />
    },
    {
        path: '/Landing',
        component: LandingPage
    },
    {
        path: '/Servicios',
        component: Servicios
    },
    {
        path: '/GenerarFactura',
        component: GenerarFactura
    },
    {
        path: '/Propiedades',
        component: Propiedades
    },
    {
        path: '/Residencias',
        component: Residencias
    },
    {
        path: '/CuentasPorCobrar',
        component: CuentasPorCobrar
    },
    {
        path: '/TiposDePropiedades',
        component: TiposDePropiedades
    },
    {
        path: '/CargarPago',
        component: CargarPago
    },
    {
        path: '/Gastos',
        component: Gastos
    },
    {
        path: '/Deudas',
        component: Deudas
    },
    {
        path: '/SubirPago',
        component: SubirPago
    },
    {
        path: '/Recibos',
        component: Recibos
    }
    ,
    {
        path: '/VerGastos',
        component: VerGastos
    }
]