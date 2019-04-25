import React from 'react'
import { Redirect } from "react-router-dom"

// Todas las vistas de la pagina
import LandingPage from './views/LandingPage'
import FAQs from './views/FAQs'
import CargarPago from './views/CargarPago'
import EstadoCuenta from './views/EstadoCuenta'
import GenerarFactura from './views/GenerarFactura'
import MiCondominio from './views/MiCondominio'
import UserSelect from './views/UserSelect'
import Administrar from './views/Administrar'

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
        path: '/FAQs',
        component: FAQs
    },
    {
        path: '/CargarPago',
        component: CargarPago
    },
    {
        path: '/EstadoCuenta',
        component: EstadoCuenta
    },
    {
        path: '/GenerarFactura',
        component: GenerarFactura
    },
    {
        path: '/MiCondominio',
        component: MiCondominio
    },
    {
        path: '/UserSelect',
        component: UserSelect
    },
    {
        path: '/Administrar',
        component: Administrar
    }
]