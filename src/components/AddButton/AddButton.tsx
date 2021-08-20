import React from "react";
import { Button } from "react-bootstrap";

const AddButton = (item:any) => {
    
    const handleClick = (e: React.ChangeEvent<any>) => {
        e.preventDefault();
        window.location.href = `/edit_good/${item.id}`;
    }

    return (
        <Button variant="outline-primary" onClick={handleClick}> Редактировать {item.item}</Button>
    )
}

export default AddButton;