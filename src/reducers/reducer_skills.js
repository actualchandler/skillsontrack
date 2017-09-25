
import { FETCH_SKILLS } from '../actions/actions_skills';

export default function(state = {}, action){
   switch(action.type){
      case FETCH_SKILLS:
         return action.payload.data
      default:
         return state
   }
}
