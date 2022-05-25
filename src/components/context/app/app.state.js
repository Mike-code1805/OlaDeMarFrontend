import { useReducer } from 'react';
import { types } from './app.types';
import AppContext from './app.context';
import { appReducer } from './app.reducer';


const AppState = ({ children }) => {
  const [state, dispatch] = useReducer( appReducer, { 
    sidebarIsOpen: false,
    sidebarIndex: '',
    headerMenuIsOpen: false,
  });

  const openSidebar = () => { dispatch({ type: types.OPEN_SIDEBAR })}
  const closeSidebar = () => { dispatch({ type: types.CLOSE_SIDEBAR })}
  const toggleSidebar = () => { dispatch({ type: types.TOGGLE_SIDEBAR })}
  const setSidebarIndex = (index) => { dispatch({ type: types.SET_SIDEBAR_INDEX, payload: index })}
  const openHeaderMenu = () => { dispatch({ type: types.OPEN_HEADER_MENU })}
  const closeHeaderMenu = () => { dispatch({ type: types.CLOSE_HEADER_MENU })}

  return (
    <AppContext.Provider value={{
      sidebarIsOpen: state.sidebarIsOpen,
      sidebarIndex: state.sidebarIndex,
      headerMenuIsOpen: state.headerMenuIsOpen,
      openSidebar,
      closeSidebar,
      toggleSidebar,
      setSidebarIndex,
      openHeaderMenu,
      closeHeaderMenu,
    }}>
      { children }
    </AppContext.Provider>
  )
}

export default AppState;