import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";

export function Detail () {

    const {id} = useParams();

    const [student, setStudent] = useState({});

    useEffect(() => {
        axios.get('http://localhost:3000/students/'+id).then(res =>
        setStudent(res.data))
    }, [])

    return (
        <>
        
            <p>name: {student.name}</p>
            <p>description: {student.description}</p>
            <p>action: {student.action}</p>
            <p>score: {student.score}</p>
        
        </>
    )
}