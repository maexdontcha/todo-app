import SvgIcon from '@material-ui/core/SvgIcon'
import { IIcon, EStandardColor, defColor } from './iconTypes.d'
import React from 'react'

export default ({ color, fontSize }: IIcon) => {
  let defColor: defColor = undefined
  let custColor: string = ''
  color && color in EStandardColor ? (defColor = color) : (custColor = color)
  return (
    <SvgIcon fontSize={fontSize || 'default'} color={defColor}>
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z" fill={custColor} />
    </SvgIcon>
  )
}
