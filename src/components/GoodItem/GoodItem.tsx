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
        <>
            <div>
                {item_number}
            </div>
            <div>
                {name}
            </div>
            <div>
                {price}
            </div>
            <AddButton item={item}/>
            <DeleteButton item={item}/>
        </>
    )
}

export default GoodItem;