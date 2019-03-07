import React from 'react'
import Inbox from '../views/Inbox'
import Login from '../views/Login'
import Info from '../views/Info'
import RestoreIcon from '@material-ui/icons/Restore'
import MenuIcon from '@material-ui/icons/Menu'
import DashboardIcon from '@material-ui/icons/Dashboard'
import FolderIcon from '@material-ui/icons/Folder'
import BookIcon from '@material-ui/icons/Book'

export interface IRoute {
  path: string
  displayName: string
  component: any | React.ReactNode
  groups: any | string | string[]
  bottomNavigation: boolean
  icon: JSX.Element
}

const myroutes: IRoute[] = [
  {
    path: '/',
    component: Inbox,
    groups: '',
    displayName: 'Inbox',
    bottomNavigation: true,
    icon: <BookIcon />
  },
  {
    path: '/Info',
    component: Info,
    groups: ['save'],
    displayName: 'Info mit Gruppen',
    bottomNavigation: true,
    icon: <FolderIcon />
  },
  {
    path: '/Infox',
    component: Info,
    groups: '',
    displayName: 'ohne Gruppen',
    bottomNavigation: true,
    icon: <DashboardIcon />
  },
  {
    path: '/menu',
    component: Info,
    groups: '',
    displayName: 'Menu',
    bottomNavigation: true,
    icon: <MenuIcon />
  }
]

export default myroutes
