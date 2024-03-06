import { useParams } from "react-router-dom"

export function DetailEmployees () {

    const {id} = useParams();

    return (
        <>
            <h3>Thong tin chi tiet cua phan tu co id: {id}</h3>
        </>
    )
}