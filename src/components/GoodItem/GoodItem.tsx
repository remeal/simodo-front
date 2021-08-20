import React from "react";
import AddButton from "../AddButton/AddButton";
import DeleteButton from "../DeleteButton/DeleteButton";


const GoodItem = (data:any) => {

    const item = "товар";

    const {
        item_number,
        name,
        price
    } = data.data;

    return (
        <tr>
            <td>{item_number}</td>
            <td>{name}</td>
            <td>{price}</td>
            <td><AddButton item={item} id={item_number} type='goods'/></td>
            <td><DeleteButton item={item} id={item_number} type='goods'/></td>
        </tr>
    )
}

export default GoodItem;