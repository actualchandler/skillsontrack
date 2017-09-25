SELECT *
FROM students_skills
	JOIN skills
    ON skills.id = students_skills.skill_id
    JOIN students
    ON students.id = students_skills.student_id
WHERE teacher_id = $1