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
        navigate('/detailemployees/'+ id)
    }

    return (
        <>
        {state && <h3>Thong tin tai khoan: {state.email} va {state.password}</h3>}
        <table>
        {employees.map((employee) => (
            <tr key={employee.id}>
                <td>{employee.name}</td>
                <td>{employee.age}</td>
                <td><button onClick={() => handleClick(employee.id)}>detail</button></td>
            </tr>
))}
        </table>
        </>
    )
}