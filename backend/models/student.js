const mongoose = require('mongoose');

const student = new mongoose.Schema({
    name:String,
    standard:String,
    rollNo:{
        type:Number,
        required:true,
        unique:true

    }
},{
    timestamps:true
});

const Student = mongoose.model('Student',student);

module.exports = Student;