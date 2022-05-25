import { types } from './app.types';

export const appReducer = (state, action) => {
  switch( action.type ) {
    case types.OPEN_SIDEBAR:
      return { ...state, sidebarIsOpen: true }
    case types.CLOSE_SIDEBAR:
      return { ...state, sidebarIsOpen: false }
    case types.TOGGLE_SIDEBAR:
      return { ...state, sidebarIsOpen: !state.sidebarIsOpen }
    case types.SET_SIDEBAR_INDEX:
      return { ...state, sidebarIndex: action.payload }
    case types.OPEN_HEADER_MENU:
      return { ...state, headerMenuIsOpen: true }
    case types.CLOSE_HEADER_MENU:
      return { ...state, headerMenuIsOpen: false }
    default: 
      return state;
  }
}