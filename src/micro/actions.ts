import { initGlobalState, type MicroAppStateActions } from 'qiankun'

const initialState = {
  user: null,
  theme: 'light',
}

const actions: MicroAppStateActions = initGlobalState(initialState)

export default actions
