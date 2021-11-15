const Student = require('../models/student');

/*const getAllStudents = async (req,res) =>{
    const students = await Student.find();

    res.send(students);
}*/

const getAllStudents = async (req,res) => {
    try{
        const students = await Student.find();     
        if(!students) throw Error('No Item');
        res.status(200).json(students);
    }
    catch(err){
        res.status(400).json({msg:err});
    }
}
const createStudent = async (req,res) => {
    const{name, rollNo, standard} = req.body;
    const student = new Student({name, rollNo, standard});

    const result = await student.save();
    res.send(result);
}

const deleteStudent = async (req,res) => {
    const {rollNo} = req.query;
    const result = await Student.deleteOne({rollNo:+rollNo});
    res.send(result);

}
module.exports ={
    getAllStudents,
    createStudent,
    deleteStudent
}