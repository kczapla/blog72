import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import NavigationBar from './navigation-bar'
import MainContent from './main-content'
import Routes from '../routes'

import { StyledApp } from './style'

export const App = () => {
  return (
    <StyledApp>
      <BrowserRouter>
        <NavigationBar/>
        <MainContent>
          <Routes/>
        </MainContent>
      </BrowserRouter>
    </StyledApp>
  )
}

export default App
