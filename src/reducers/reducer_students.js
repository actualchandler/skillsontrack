import { FETCH_STUDENTS } from '../actions/actions_students'

export default function(state = {}, action){
   switch(action.type){
      case FETCH_STUDENTS:
         return action.payload.data
      default:
      return state
   }
}