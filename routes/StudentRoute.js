const express = require('express');
const { getStudents, createStudents, getStudentById, UpdateStudentById, DeleteStudentsById } = require('../controllers/StudentController');
const router = express.Router();

router.route('/').get(getStudents).post(createStudents)

router.route('/:id').get(getStudentById).put(UpdateStudentById).delete(DeleteStudentsById)

module.exports = router