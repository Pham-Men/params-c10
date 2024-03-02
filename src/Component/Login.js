import { Formik, Form, Field } from "formik"
import { useNavigate } from "react-router-dom"
export function Login () {
    const navigate = useNavigate();
    return (
        <>
        
            <Formik 
            initialValues={{
                email: '',
                password: ''
            }}
            onSubmit={value => {
                if (value.email === 'admin@gmail.com' && value.password === 'letmein') {
                    navigate('/employee', {state: {email: value.email, password: value.password}})
                }
            }}
            >
                <Form>
                    <Field name='email'></Field>
                    <Field name='password'></Field>
                    <button>Dang nhap</button>
                </Form>
            </Formik>
        
        </>
    )
}