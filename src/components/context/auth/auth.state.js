import { useReducer } from 'react';
import jwtDecode from 'jwt-decode';
import AuthContext from './auth.context';
import authReducer from './auth.reducer';
import { types } from './auth.types';

const AuthState = props => {
  const [state, dispatch] = useReducer( authReducer, { user: false });

  const login = (token) => {
    localStorage.setItem('authToken', token);
    dispatch({
      type: types.LOGIN,
      payload: jwtDecode(token),
    });
  }

  const logout = () => {
    localStorage.removeItem('authToken');
    dispatch({ type: types.LOGOUT });
  }

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        login,
        logout,
      }}
    >
      { props.children }
    </AuthContext.Provider>
  )
}

export default AuthState;