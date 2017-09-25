import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import studentsReducer from './reducer_students';
import skillsReducer from './reducer_skills';
import categoryReducer from './reducer_categorys';
import subReducer from './reducer_sub';
import userReducer from './reducer_user';
import studentSkillsReducer from './reducer_student_skills';
import updateReducer from './reducer_update';

const rootReducer = combineReducers({
   form: formReducer,
   students: studentsReducer,
   skills: skillsReducer,
   categorys: categoryReducer,
   sub: subReducer,
   user: userReducer,
   studentSkills: studentSkillsReducer,
   update: updateReducer
});

export default rootReducer;