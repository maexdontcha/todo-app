import React from 'react'
import SaveRoute from './SaveRoute'
import myroutes from '../../routes/default'

const Content: React.SFC<any> = () => {
  return (
    <div id={'MAIN'}>
      {myroutes.map(route => (
        <SaveRoute
          path={route.path}
          permittedGroups={[route.groups]}
          component={route.component}
          key={route.path}
        />
      ))}
    </div>
  )
}

export default Content
