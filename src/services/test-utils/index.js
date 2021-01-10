import React from 'react'
import { MemoryRouter } from 'react-router'
import { render } from '@testing-library/react'

import Routes from '../../components/routes'

export const renderRouterWithInitialEntries = ({ initialEntries }) => {
  render(
      <MemoryRouter initialEntries={initialEntries}>
        <Routes/>
      </MemoryRouter>
  )
}

export const renderWithRouter = ({ component }) => {
  render(
    <MemoryRouter>
      {component}
    </MemoryRouter>
  )
}
