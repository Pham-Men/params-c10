import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export function Students () {
    const [students, setStudents] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/students').then(res =>
        setStudents(res.data))
    }, [])
    return (
        <>
            {students.map((student) => (
                <>
                    <h3 key={student.id}>{student.name} <Link to={'/detail/'+ student.id}>Detail</Link></h3>
                    
                </>
            ))}
        </>
    )
}