import * as React from 'react'

import { ReactReduxContext, connect, ReactReduxContextValue } from 'react-redux'
import { toggleTheme } from '../redux/theme/themeAction'
import { IAppState } from '../redux/store'

import { EThemeActionTypes } from '../redux/theme/themeTypes.d'

const addName: React.SFC<{}> = () => {
  return (
    <ReactReduxContext.Consumer>
      {({ store }: any) => (
        <button
          onClick={() => {
            store.dispatch(
              toggleTheme({
                payload: store.getState().themeState.darkMode,
                type: EThemeActionTypes.TOGGLE
              })
            )
          }}
        />
      )}
    </ReactReduxContext.Consumer>
  )
}

export { addName }
//

const mapStateToProps = (store: IAppState) => {
  return {
    characters: store.characterState.characters
  }
}

export default connect(mapStateToProps)(addName)
