import React, {useEffect, useState} from "react";
import axios from "axios";
import { Alert } from "react-bootstrap";
import EditFormGood from "../components/UpdateItem/UpdateItem";

const EditGood = (props:any) => {

    const [errors, setError] = useState(null);
    const [responses, setResponse] = useState<any>(null);

    useEffect(() => {
        axios.get(`/goods/${props.match.params.id}`)
            .then(res  => res.data)
            .then(data => {setResponse(data)})
            .catch(error => {setError(error)})
    });
    return (
        <>
        {errors ? <Alert variant='danger'>Произошла ошибка!</Alert> : ''}
        {responses ? <EditFormGood responses={responses}/> : ''}
        </>
    )
};

export default EditGood;