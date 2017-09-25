let app = require('../index.js')
let db = app.get('db')

module.exports = {
   // Add a new student to the current users students
   addStudent: (req, res, next) => {
      let student = req.body
      db.students.insert([student.first_name, student.last_name, student.age, student.teacher_id], (err, student) => {
         if(err) {
            console.log(err)
            return res.status(500).send(err)
         } else {
            return res.status(200).send('Student Added')
         }
      })
   },

   addSkill: (req, res, next) => {
      let newSkill = req.body;

      db.students.read_skills([newSkill.student_id, newSkill.teacher_id, newSkill.skill_id], (err, skill) =>{
         // Check if there is already a skill
         // If there is do something
         if(skill[0]){
            skill = skill[0]
            
            db.students.replace_skill([skill.id, newSkill.score, newSkill.date], (err, skill) => {
               if(err){
                  console.log('Replace skill ERR:', err)
                  return res.status(500).send(err)
               } 
            })
            // If there isnt
         } else {
            db.students.insert_skill([newSkill.student_id, newSkill.skill_id, newSkill.teacher_id, newSkill.score, newSkill.date], (err, skill) => {
               if(err){
                  console.log('Insert Student Skill ERR:', err)
                  return res.status(500).send(err)
               } else {
                  return res.status(200).send('Skill added to student')
               }
            })
         }
      })

   },
      

   // Read all students under current user
   readStudents: (req, res, next) => {
      let id = req.params.teacher_id

      db.students.read([id], (err, students) => {
         if(err){
            console.log('Read students ERR:', err)
            res.status(500).send(err)
         }
         return res.status(200).send(students)
      })
   },

   // Read individual student
   readStudentSkills: (req, res, next) => {
      let id = req.params.teacher_id
      
      db.students.read_student_skills([id], (err, skills) => {
         if(err){
            console.log('read students skills ERR:', err)
            return res.status(500).send(err)
         } else {
            return res.status(200).send(skills)
         }
      })
   },

   // Update students skill
   updateSkill: (req, res, next) => {

   },

   // Edit students information
   editStudent: (req, res, next) => {

   },

   // Remove student
   removeStudent: (req, res, next) => {

   },

   // Remove skill from student
   removeSkill: (req, res, next) => {

   }

}
