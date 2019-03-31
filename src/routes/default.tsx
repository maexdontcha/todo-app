import React from 'react'

import { CreateTaskView, Info, Login, Inbox } from '../views'
import RestoreIcon from '@material-ui/icons/Restore'
import MenuIcon from '@material-ui/icons/Menu'
import DashboardIcon from '@material-ui/icons/Dashboard'
import FolderIcon from '@material-ui/icons/Folder'
import InboxIcon from '@material-ui/icons/Inbox'

export interface IRoute {
  path: string
  displayName: string
  component: any | React.ReactNode
  position?: number
  groups: any | string | string[]
  bottomNavigation: boolean
  icon?: JSX.Element
}

const myroutes: IRoute[] = [
  {
    path: '/',
    component: Inbox,
    groups: '',
    displayName: 'Inbox',
    position: 1,
    bottomNavigation: true,
    icon: <InboxIcon />
  },
  {
    path: '/Info',
    component: Info,
    groups: ['save'],
    displayName: 'Projekte',
    position: 2,
    bottomNavigation: true,
    icon: <FolderIcon />
  },
  {
    path: '/Infox',
    component: Info,
    groups: '',
    displayName: 'Dashboard',
    position: 3,
    bottomNavigation: true,
    icon: <DashboardIcon />
  },
  {
    path: '/menu',
    component: Info,
    groups: '',
    displayName: 'Menu',
    position: 4,
    bottomNavigation: true,
    icon: <MenuIcon />
  },
  {
    path: '/create',
    component: CreateTaskView,
    groups: '',
    displayName: 'Aufgabe erstellen',
    bottomNavigation: false
  }
]

export default myroutes
