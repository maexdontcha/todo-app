import React from 'react'
import { LongPress, FabButton } from '../../index'
import ShareIcon from '@material-ui/icons/Share'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
interface IProps {
  state: any
}

export const TaskActions = (props: IProps) => {
  return (
    <React.Fragment>
      <FabButton
        link={true}
        to={'/edit'}
        size={'small'}
        icon={<EditIcon fontSize={'small'} />}
        state={props.state}
        style={{ position: 'absolute', transform: 'translate(0px,-50px)' }}
      />
      <FabButton
        link={false}
        onClick={() => {
          alert('Share')
        }}
        size={'small'}
        icon={<ShareIcon fontSize={'small'} />}
        style={{ position: 'absolute', transform: 'translate(50px,-50px)' }}
      />
      <FabButton
        link={false}
        onClick={() => {
          alert('Delete')
        }}
        size={'small'}
        icon={<DeleteIcon fontSize={'small'} />}
        style={{ position: 'absolute', transform: 'translate(100px,-50px)' }}
      />
    </React.Fragment>
  )
}
