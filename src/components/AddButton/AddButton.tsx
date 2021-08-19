import React from "react";
import { Button } from "react-bootstrap";

const AddButton = (item:any) => {
    return (
        <Button variant="outline-primary"> Редактировать {item.item}</Button>
    )
}

export default AddButton;