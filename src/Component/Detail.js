import { useParams } from "react-router-dom"

export function Detail () {


    const {id} = useParams();
    return (
        <>
        
            <h3>Thong tin chi tiet {id}</h3>
        
        </>
    )
}