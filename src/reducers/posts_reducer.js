import { omit, mapKeys } from 'lodash';
import { FETCH_POSTS, FETCH_POST } from '../actions';


export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_POSTS:
      return mapKeys(action.payload.data, "id");
    case FETCH_POST:
      console.log(action);
      return {...state, [action.payload.data.id]: action.payload.data};
    default:
      return state;
  }
}