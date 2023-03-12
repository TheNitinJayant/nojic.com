import React from 'react'
import { Route } from 'react-router-dom'
import Home from './components/home/Home'

const ROUTES = {
    HOME : "/",
}

function Routes() {
    return (
        <>
            <Route exact path={ROUTES.HOME} element={ <Home />} />
        </>
    )
}

export default Routes