import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios";
import { Field, Form, Formik } from "formik";

export function Detail () {

    const {id} = useParams();

    const [student, setStudent] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3000/students/'+id).then(res =>
        setStudent(res.data))
    }, [])

    return (
        <>
        <Formik
            initialValues={student}
            enableReinitialize={true}
            onSubmit={(values) => {
                axios.put('http://localhost:3000/students/'+id, values).then(res => 
                    navigate('/students')
                )
            }}
        >
            <Form>
                <Field name='name'></Field>
                <Field name='description'></Field>
                <Field name='action'></Field>
                <Field name='score'></Field>
                <button>Save</button>
            </Form>
        </Formik>
        
            <p>name: {student.name}</p>
            <p>description: {student.description}</p>
            <p>action: {student.action}</p>
            <p>score: {student.score}</p>
        
        </>
    )
}