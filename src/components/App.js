import React from 'react'
import { Redirect, BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import BadgeNew from '../pages/BadgeNew'
import Badges from '../pages/Badges'
import Layout from '../components/Layout'
import NotFound from '../components/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/badges" component={ Badges } />
          <Route exact path="/badges/new" component={ BadgeNew } />
          <Route path="/error" component={ NotFound } />
          <Redirect from="*" to="/error" />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}
