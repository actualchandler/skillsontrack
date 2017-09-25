import { FETCH_USER, REGISTER_USER } from '../actions/actions_user';

export default function(state = {}, action){
   switch(action.type){
      case FETCH_USER:
         return action.payload.data
      case REGISTER_USER:
         return action.payload.data
      default:
         return state
   }
}