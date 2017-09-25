SELECT *
FROM students_skills
JOIN skills
ON students_skills.skill_id = skills.id
WHERE students_skills.teacher_id = $1