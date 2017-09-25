import { FETCH_STUDENT_SKILLS } from '../actions/actions_students';

export default function(state = {}, action){
   switch(action.type){
      case FETCH_STUDENT_SKILLS:
         return action.payload.data
      default:
         return state
   }
}