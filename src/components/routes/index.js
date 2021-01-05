import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Blog from '../blog'
import Post from '../../domain/post'
import BlogItemList from '../blog-item-list'

const Routes = () => {
  return (
    <Switch>
        <Route exact={true} path='/blog'>
            <Blog><BlogItemList/></Blog>
        </Route>
        <Route exact={true} path='/posts/:postId'>
            <Post/>
        </Route>
    </Switch>
  )
}

export default Routes
