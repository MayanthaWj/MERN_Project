const express = require('express');
const { getAllStudents, createStudent, deleteStudent } = require('../controllers/studentController');

const router = express.Router();

router.get('/student',getAllStudents)
router.post('/student',createStudent);
router.delete('/delete',deleteStudent)




module.exports = router;
