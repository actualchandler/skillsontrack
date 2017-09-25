import { FETCH_SUB } from '../actions/actions_skills';

export default function(state = {}, action){
   switch(action.type){
      case FETCH_SUB:
         return action.payload.data
      default:
         return state
   }
}