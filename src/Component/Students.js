import axios from "axios";
import { useEffect, useState } from "react"
import { Link} from "react-router-dom";
import { Field, Formik, Form } from "formik";

export function Students () {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/students').then(res =>
        setStudents(res.data))
    }, [students])

    const handleDelete = (id) => {
        axios.delete('http://localhost:3000/students/' + id).then()
    }

    return (
        <>
            {students.map((student) => (
                <>
                    <h3
                        key={student.id}>{student.name}
                        <Link to={'/detail/'+ student.id}>Detail</Link>
                        <button onClick={() => handleDelete(student.id)}>Delete</button>
                    </h3>
                </>
            ))}

            <h2>Form add new</h2>

            <Formik
            initialValues={{students}}
            onSubmit={(values) => {
                axios.post('http://localhost:3000/students', values).then ()
            }}
            >
                <Form>
                    <Field name = 'name'></Field>
                    <Field name = 'description'></Field>
                    <Field name = 'action'></Field>
                    <Field name = 'score'></Field>
                    <button type='submit'>Add new</button>
                </Form>
            </Formik>
        </>
    )
}