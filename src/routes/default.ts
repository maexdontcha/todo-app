import Home from '../views/Home'
import Login from '../views/Login'
import Info from '../views/Info'

export interface IRoute {
  path: string
  displayName: string
  component: any | React.ReactNode
  groups: any | string | string[]
}

const myroutes: IRoute[] = [
  {
    path: '/',
    displayName: 'Home',
    component: Home,
    groups: ''
  },
  {
    path: '/Info',
    component: Info,
    groups: ['save'],
    displayName: 'Info mit Gruppen'
  },
  { path: '/Infox', component: Info, groups: '', displayName: 'ohne Gruppen' }
]

export default myroutes
