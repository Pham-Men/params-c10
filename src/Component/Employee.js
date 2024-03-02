import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function Employee () {

    const [employees, setEmployees] = useState([
        {
            id: 1,
            name: "Hoa",
            age: 20
        },
        {
            id: 2,
            name: "Khánh",
            age: 25
        },
        {
            id: 3,
            name: "Tú",
            age: 22
        },
    ]);
    const {state} = useLocation();
    const navigate = useNavigate();

    const handleClick = (id) => {
        console.log(id)
        navigate('/detail/'+ id)
    }

    return (
        <>
        {state && <h3>Thong tin tai khoan: {state.email} va {state.password}</h3>}
        <table>
        {employees.map((employee, ind) => (
            <tr key={employee.id}>
                <td>{employee.name}</td>
                <td>{employee.age}</td>
                <td><button onClick={() => handleClick(ind)}>detail</button></td>
            </tr>
))}
        </table>
        </>
    )
}