import React from 'react';
import axios from 'axios';

const Student = () =>{
    const [name, setName] = React.useState('');           
    const [standard, setStandard] = React.useState('');
    const [rollNo, setRollNo] = React.useState([]);

    const onsubmitHandler = async ()=>{
        const result = await axios.post("http://localhost:4000/student",{name, standard, rollNo});
        if(!result) alert("Something went wrong!");
    }

    return(
        <form>
            <h3> Student Registration Portal</h3>

            <div className="form-group">
                <label>Enter the name of student:</label>
                <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)} />
            </div>

            <div className="form-group">
                <label>Enter the class of student:</label>
                <input type="text" className="form-control" onChange={(e)=>setStandard(e.target.value)} />
            </div>

            <div className="form-group">
                <label>Enter the roll of the student:</label>
                <input type="number" className="form-control" onChange={(e)=>setRollNo(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary" onClick={onsubmitHandler}>Save</button>

        </form>
    )
}
export default Student;