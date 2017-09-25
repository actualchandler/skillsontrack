import axios from 'axios';

import { CONFIG } from './config';

const ROOT_URL = CONFIG.ROOT_URL;

export const FETCH_CATEGORYS = 'fetch_categorys';

export function fetchCategorys(teacher_id){
   const request = axios.get(`${ROOT_URL}skill/read/categorys/${teacher_id}`)

   return {
      type: FETCH_CATEGORYS,
      payload: request
   }
}

export const CREATE_CATEGORY = 'create_category';

export function createCategory(values, callback){
   const request = axios.post(`${ROOT_URL}skill/add/category`, values)
         .then( () => { callback() })

   return {
      type: CREATE_CATEGORY,
      payload: request
   }
}

export const CREATE_SUB = 'create_sub';

export function createSub(values, callback){
   const request = axios.post(`${ROOT_URL}skill/add/sub`, values)
         .then( () => { callback() })

   return {
      type: CREATE_SUB,
      payload: request
   }
}

export const DELETE_SUB = 'delete_sub';

export function deleteSub(sub_id, callback){
      const request = axios.delete(`${ROOT_URL}skill/remove/sub/${sub_id}`)

      return {
            type: DELETE_SUB,
            payload: request
      }
}

export const CREATE_SKILL = 'create_skill';

export function createSkill(values, callback){
      const request = axios.post(`${ROOT_URL}skill/add/skill`, values)
            .then( () => { callback() })

      return {
            type: CREATE_SKILL,
            payload: request
      }
}


export const FETCH_SKILLS = 'fetch_skills';

export function fetchSkills(){
   const request = axios.get(`${ROOT_URL}skill/read`)

   return {
      type: FETCH_SKILLS,
      payload: request
   }
}

export const DELETE_SKILL = 'delete_skill';

export function deleteSkill(skill_id){
      const request = axios.delete(`${ROOT_URL}skill/remove/skill/${skill_id}`)

      return {
            type: DELETE_SKILL,
            payload: request
      }
}

export const FETCH_SUB = 'fetch_sub';

export function fetchSubs(){
   const request = axios.get(`${ROOT_URL}skill/read/sub`)

   return {
      type: FETCH_SUB,
      payload: request
   }
}
