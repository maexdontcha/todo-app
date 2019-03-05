import Home from '../views/Home'
import Login from '../views/Login'
import Info from '../views/Info'

export interface IRoute {
  path: string
  displayName: string
  component: any | React.ReactNode
  groups: any | string | string[]
  test?: any
}

const myroutes: IRoute[] = [
  {
    path: '/',
    component: Home,
    groups: '',
    displayName: 'Home'
  },
  {
    path: '/Info',
    component: Info,
    groups: ['save'],
    displayName: 'Info mit Gruppen'
  },
  {
    path: '/Infox',
    component: Info,
    groups: '',
    displayName: 'ohne Gruppen'
  }
]

export default myroutes
