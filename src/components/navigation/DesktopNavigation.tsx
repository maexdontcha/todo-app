import React from 'react'
import myroutes from '../../routes/default'
import { Link } from 'react-router-dom'

const DesktopNavigation: React.SFC = () => {
  return (
    <nav>
      {myroutes.map(route => (
        <Link to={route.path} key={route.path}>
          {route.displayName} //
        </Link>
      ))}
    </nav>
  )
}
export default DesktopNavigation
