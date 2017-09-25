
import { CREATE_CATEGORY, CREATE_SUB, CREATE_SKILL, DELETE_SUB, DELETE_SKILL } from '../actions/actions_skills';
import { CREATE_STUDENT, ADD_STUDENT_SKILL } from '../actions/actions_students';

export default function(state = {}, action){
   switch(action.type){
      case CREATE_CATEGORY:
            return true
      case CREATE_SUB:
            return true
      case CREATE_SKILL:
            return true
      case CREATE_STUDENT:
            return true
      case ADD_STUDENT_SKILL:
            return true
      case DELETE_SUB:
            return true
      case DELETE_SKILL:
            return true
      default:
         return false
   }
}