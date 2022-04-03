import React from "react";
import AddButton from "../AddButton/AddButton";
import DeleteButton from "../DeleteButton/DeleteButton";


const Item = (data:any) => {

    console.log(data);

    const item = "товар";

    const {
        id,
        name,
        price,
        count,
    } = data.data;


    return (
        <tr>
            <td>{id.value}</td>
            <td>{name.value}</td>
            <td>{price.value}</td>
            <td>{count.value}</td>
            <td><AddButton item={item} id={id} type='goods'/></td>
            <td><DeleteButton item={item} id={id} type='goods'/></td>
        </tr>
    )
}

export default Item;