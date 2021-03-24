import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { DashBoard } from './dashboard'

export function Pages() {
  const { isAuth, firebaseLogOut } = useAuth()
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/dashboard" />
      </Route>
      <Route path="/dashboard" component={DashBoard} />
    </Switch>
  )
}
