import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Blog from '../blog'
import BlogItemList from '../blog-item-list'
import NavigationBar from './navigation-bar'

export const App = () => {
  return (
    <Router>
      <NavigationBar/>
      <Switch>
        <Route exact={true} path='/blog'>
          <Blog><BlogItemList/></Blog>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
