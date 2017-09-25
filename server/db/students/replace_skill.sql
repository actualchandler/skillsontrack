UPDATE students_skills
SET score = $2,
      completed_date = $3
WHERE id = $1