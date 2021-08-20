import axios from "axios";
import React, {useState} from "react";
import { Alert, Button } from "react-bootstrap";

const DeleteButton = (item:any) => {

    const [errors, setError] = useState(null);
    
    const handleDelete = (e: React.ChangeEvent<any>) => {
        e.preventDefault();

        axios.delete(`/${item.type}/${item.id}`)
            .catch(error => setError(error))
    }

    return (
        <>
            <Button variant="outline-danger" onClick={handleDelete}>Удалить {item.item}</Button>
            { errors ? <Alert variant='danger'>Произошла ошибка!</Alert> : '' }
        </>
    )
}

export default DeleteButton;