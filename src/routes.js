import React from 'react'
import { Redirect } from "react-router-dom"

// Todas las vistas de la pagina
import LandingPage from './views/LandingPage'
import FAQs from './views/FAQs'
import Servicios from './views/Servicios'
import Contabilidad from './views/Contabilidad'
import GenerarFactura from './views/GenerarFactura'
import Propiedades from './views/Propiedades'
import Residencias from './views/Residencias'
import CuentasPorCobrar from './views/CuentasPorCobrar'
import SignUp from './views/SignUp'

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
        path: '/SignUp',
        component: SignUp
    },
    {
        path: '/FAQs',
        component: FAQs
    },
    {
        path: '/Servicios',
        component: Servicios
    },
    {
        path: '/Contabilidad',
        component: Contabilidad
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
    }
]