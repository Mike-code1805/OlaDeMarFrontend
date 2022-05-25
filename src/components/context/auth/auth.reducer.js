import { types } from './auth.types';

const authReducer = (state, action) => {
  switch( action.type ) {
    case types.LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    case types.LOGOUT:
      return {
        ...state,
        user: null
      };
    default:
      return state;
  }
}

export default authReducer;