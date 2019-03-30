import SvgIcon from '@material-ui/core/SvgIcon'
import { IIcon, EStandardColor, defColor } from './iconTypes.d'
import React from 'react'

export default ({ color, fontSize }: IIcon) => {
  let defColor: defColor = undefined
  let custColor: string = ''
  color && color in EStandardColor ? (defColor = color) : (custColor = color)
  return (
    <SvgIcon fontSize={fontSize || 'default'} color={defColor}>
      <path
        fill={custColor}
        d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
      />
    </SvgIcon>
  )
}
