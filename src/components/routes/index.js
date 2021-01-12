import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Blog from '../blog'
import Post from '../../domain/post'
import BlogItemList from '../blog-item-list'
import LoadingSpinner from '../loading-spinner'

const Routes = () => {
  return (
    <Switch>
        <Route exact={true} path='/blog'>
            <Blog><BlogItemList/></Blog>
        </Route>
        <Route exact={true} path='/posts/:postId'>
            <Post/>
        </Route>
        <Route exact={true} path='/authors/:authorId'>
          <div>{'author does not exist'}</div>
        </Route>
        <Route exact={true} path='/loading'>
          <LoadingSpinner/>
        </Route>
    </Switch>
  )
}

export default Routes
