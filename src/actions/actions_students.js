import axios from 'axios';

import { CONFIG } from './config'

const ROOT_URL = CONFIG.ROOT_URL

export const FETCH_STUDENTS = 'fetch_students';

export function fetchStudents(teacher_id){
   const request = axios.get(`${ROOT_URL}students/${teacher_id}`)

   return {
      type: FETCH_STUDENTS,
      payload: request
   }
}

export const CREATE_STUDENT = 'create_student'

export function createStudent(values, callback){
   const request = axios.post(`${ROOT_URL}student/add`, values)
      .then( () => { callback() })

   return {
      type: CREATE_STUDENT,
      payload: request
   }
}

export const FETCH_STUDENT_SKILLS = 'fetch_student_skills';

export function fetchStudentSkills(teacher_id){
   const request = axios.get(`${ROOT_URL}student/skills/read/${teacher_id}`)

   return {
      type: FETCH_STUDENT_SKILLS,
      payload: request
   }
}

export const ADD_STUDENT_SKILL = 'add_student_skill';

export function addStudentSkill(values){
   const request = axios.post(`${ROOT_URL}student/skill/add`, values)

   return {
      type: ADD_STUDENT_SKILL,
      payload: request
   }
}
