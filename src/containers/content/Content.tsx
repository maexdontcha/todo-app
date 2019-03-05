import React from 'react'
import { SaveRoute } from '../../components'
import { routes } from '../../routes'

const Content: React.SFC<any> = () => (
  <div id={'MAIN'}>
    {routes.map(route => (
      <SaveRoute
        path={route.path}
        permittedGroups={[route.groups]}
        component={route.component}
        key={route.path}
      />
    ))}
  </div>
)

export default Content
