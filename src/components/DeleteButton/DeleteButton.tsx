import React from "react";
import { Button } from "react-bootstrap";

const DeleteButton = (item:any) => {
    console.log(item);
    return (
        <Button variant="outline-danger">Удалить {item.item}</Button>
    )
}

export default DeleteButton;