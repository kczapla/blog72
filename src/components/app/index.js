import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Blog from '../blog'
import Post from '../../domain/post'
import BlogItemList from '../blog-item-list'
import NavigationBar from './navigation-bar'

import { StyledApp } from './style'

export const App = () => {
  return (
    <StyledApp>
      <Router>
        <NavigationBar/>
        <Switch>
          <Route exact={true} path='/blog'>
            <Blog><BlogItemList/></Blog>
          </Route>
          <Route exact={true} path='/posts/:id'>
            <Post/>
          </Route>
        </Switch>
      </Router>
    </StyledApp>
  )
}

export default App
