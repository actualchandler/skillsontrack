let app = require('../index.js')
let db = app.get('db')

module.exports = {
   // Read
   read: (req, res, next) => {
      db.skills.read_all((err, skills) => {
         if(err) {
            console.log('Read all skills ERR:', err)
            return res.status(500).send()
         } else {
            return res.status(200).send(skills)
         }
      })
   },

   // Get Categories
   readCategory: (req, res, next) => {
     let teacher_id = req.params.teacher_id
      db.skills.read_category([teacher_id], (err, categories) => {
         if(err){
            console.log('reac category ERR:', err)
            return res.status(500).send(err)
         } else {
            return res.status(200).send(categories)
         }
      })
   },

    // Get Categories
    readSub: (req, res, next) => {
      db.skills.read_sub((err, categories) => {
         if(err){
            console.log('read sub ERR:', err)
            return res.status(500).send(err)
         } else {
            return res.status(200).send(categories)
         }
      })
   },
   
   // Add Skill Category
   addCategory: (req, res, next) => {
      let category = req.body

      db.skills.insert_category([category.title, category.teacher_id], (err, category) => {
         if(err){
            console.log('insert category ERR:', err)
            return res.status(500).send(err)
         } else {
            return res.status(200).send('Category Added')
         }
      })
   },

   // Add Subc ategory
   addSub: (req, res, next) => {
      let category = req.body
      
      db.skills.insert_sub_category([category.category_id, category.title, category.teacher_id], (err, sub) => {
         if(err){
            console.log('insert subcategory ERR:', err)
            return res.status(500).send(err)
         } else {
            return res.status(200).send('Sub Category Added')
         }
      })
   },

   // Add Skill
   addSkill: (req, res, next) => {
     let skill = req.body 
     
      db.skills.insert_skill([skill.subcategory_id, skill.short_desc, skill.long_desc, skill.skill_title, skill.teaching, skill.video_url, skill.teacher_id], (err, skill) => {
         if(err){
            console.log('insert skill ERR:', err)
            return res.status(500).send(err)
         } else {
            return res.status(200).send('Skill added')
         }
      })
   },

   // Edit Skill
   editSkill: (req, res, next) => {
      db.skills.edit_skill((err, skill) => {
         if(err){
            console.log('ERR:', err)
            return res.status(500).send(err)
         } else {
            return res.status(200).send(skill)
         }
      })
   },

   // Deletes Category
   removeCategory: (req, res, next) => {
      db.skills.remove_category((err, category) => {
         if(err){
            console.log('ERR:', err)
            return res.status(500).send(err)
         } else {
            return res.status(200).send(category)
         }
      })
   },

   // Deletes Subcategory
   removeSub: (req, res, next) => {
     let sub = req.params
     db.skills.remove_sub_skills([req.params.id], (err, sub) => {
       if(err){
         console.log('ERR:', err)
         return res.status(500).send(err)
        } else {
          db.skills.remove_sub([req.params.id], (err, sub) => {
             if(err){
               console.log('ERR:', err)
               return res.status(500).send(err)
             } else {
               return res.status('Skills Deleted')
             }
           })
         }
      })
   },

   // Deletes Skill
   removeSkill: (req, res, next) => {
      db.skills.remove_skill([req.params.id], (err, skill) => {
         if(err){
            console.log('ERR:', err)
            return res.status(500).send(err)
         } else {
            return res.status(200).send('Skill Deleted')
         }
      })
   }

}
