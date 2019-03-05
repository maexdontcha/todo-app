import { Login, Info } from './index'

import Home from './Home'

export interface IRoute {
  path: string
  displayName: string
  component: any
  groups: any | string | string[]
  test?: any
}
//React.ReactNode

const deliver = () => {
  return Home
}

const myroutes: IRoute[] = [
  {
    path: '/',
    test: Home,
    component: deliver,
    groups: '',
    displayName: 'Home'
  },
  {
    path: '/Info',
    component: deliver,
    groups: ['save'],
    displayName: 'Info mit Gruppen'
  },
  {
    path: '/Infox',
    component: deliver,
    groups: '',
    displayName: 'ohne Gruppen'
  }
]

export default myroutes
