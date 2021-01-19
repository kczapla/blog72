import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Blog from '../blog'
import Post from '../../domain/post'
import ErrorMessage from '../error-message'

const Routes = () => {
  return (
    <Switch>
        <Route exact={true} path='/blog'>
          <Blog/>
        </Route>
        <Route exact={true} path='/posts/:postId'>
            <Post/>
        </Route>
        <Route exact={true} path='/authors/:authorId'>
          <ErrorMessage text={'page not found'}/>
        </Route>
    </Switch>
  )
}

export default Routes
