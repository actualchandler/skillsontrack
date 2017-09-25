SELECT *
FROM students_skills
WHERE student_id = $1
   AND  teacher_id = $2
   AND  skill_id = $3