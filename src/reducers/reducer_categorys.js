
import { FETCH_CATEGORYS } from '../actions/actions_skills';

export default function(state = {}, action){
   switch(action.type){
      case FETCH_CATEGORYS:
         return action.payload.data
      default:
         return state
   }
}