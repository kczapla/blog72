import React from 'react'
import NavigationBarLink from './navigation-bar-link'

import { StyledNavigationBar } from './style'

import NavigationBarContainer from './navigation-bar-container'

const NavigationBar = () => {
  return (
        <StyledNavigationBar>
            <NavigationBarContainer>
                <NavigationBarLink to='/'>kczapla</NavigationBarLink>
                <NavigationBarLink to='/blog'>blog</NavigationBarLink>
                <NavigationBarLink to='/about'>about</NavigationBarLink>
            </NavigationBarContainer>
        </StyledNavigationBar>
  )
}

export default NavigationBar
