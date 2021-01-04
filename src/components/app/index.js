import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Blog from '../blog'
import Post from '../../domain/post'
import BlogItemList from '../blog-item-list'
import NavigationBar from './navigation-bar'
import MainContent from './main-content'

import { StyledApp } from './style'

export const App = () => {
  return (
    <StyledApp>
      <Router>
        <NavigationBar/>
        <MainContent>
        <Switch>
          <Route exact={true} path='/blog'>
            <Blog><BlogItemList/></Blog>
          </Route>
          <Route exact={true} path='/posts/:postId'>
            <Post/>
          </Route>
        </Switch>
        </MainContent>
      </Router>
    </StyledApp>
  )
}

export default App
