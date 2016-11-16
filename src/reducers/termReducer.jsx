import { SET_TERM } from '../actions/types';

export default function(state = '', action){
  switch (action.type) {
    case SET_TERM:
      return action.payload;
      //breaked
    default:
      return state;

  }
}
