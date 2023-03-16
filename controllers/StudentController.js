const asyncHandler = require("express-async-handler");

const student = require("../models/StudentModel");
// desc get all students
// route GET /api/students
//access public

const getStudents = asyncHandler(async (req, res) => {
    const students = await student.find();
    res.status(200).json(students);
});


// desc get all students
// route GET /api/students
//access public

const createStudents = asyncHandler(async (req, res) => {
    const { name, email, phone } = req.body;
    console.log("the request body is:", req.body);
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error('all fields are required')
    }
    const student = await student.create({
        name,
        email,
        phone,
    });


    res.status(201).json(student)
});
// desc get all students
// route GET /api/students
//access public

const getStudentById = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `get student info with ${req.params.id}` })
});
// desc get all students
// route GET /api/students
//access public

const UpdateStudentById = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `update student info with ${req.params.id}` })
});
// desc get all students
// route GET /api/students
//access public

const DeleteStudentsById = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `delete student info with ${req.params.id}` })
});


module.exports = { getStudents, createStudents, getStudentById, UpdateStudentById, DeleteStudentsById };