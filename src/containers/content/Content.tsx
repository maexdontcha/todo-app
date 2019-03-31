import React from 'react'
import { SaveRoute } from '../../components'
import { routes } from '../../routes'

const Content: React.SFC<any> = props => {
  console.log('render Content')
  return (
    <div id={'MAIN'}>
      {routes.map(route => (
        <SaveRoute
          path={route.path}
          permittedGroups={[route.groups]}
          component={route.component}
          key={route.path}
          title={route.displayName}
        />
      ))}
    </div>
  )
}
export default Content
