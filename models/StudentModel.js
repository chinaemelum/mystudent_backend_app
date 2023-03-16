const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "please add the student name"],

    },

    email: {
        type: String,
        required: [true, "please add the student email"],
    },
    phone: {
        type: String,
        required: [true, "please add the student phone number"],
    },
}, {
    timestamps: true,
})

module.exports = mongoose.model("students", StudentSchema)