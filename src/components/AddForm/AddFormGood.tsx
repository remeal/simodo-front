import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, FloatingLabel, Form, Row } from 'react-bootstrap';

const initialValue = {
    item_number: '',
    name: '',
    // category: '',
    price: 0,
    // description: '',
    // hidden: false,
    // image: '',
};

const createAddForm = {
    "action": "create",
    "item": "good",
    "data": {
        "name": {
            "type": "text",
            "name": "Наименование товара",
        },
        "price": {
            "type": "number",
            "name": "Цена товара",
        },
        "count": {
            "type": "number",
            "name": "Количество товара",
        }
    }
};
const dataForm = Object.entries(createAddForm.data);

const createAddOrder = {"action": "create","data": {"item_number": "number","name": "text","score": "number", "status": "string"}};
const dataOrder = Object.entries(createAddOrder.data);

const AddFormGood = () => {

    const errorPost = null;
    const response = null;

    const [values, setValues] = useState(initialValue);
    const [errors, setError] = useState(errorPost);
    const [data, setData] = useState();
    const [responses, setResponse] = useState(response);

    // useEffect(() => {
    //     axios.get("")
    //     .then(res => res.data)
    //     .then(data => {setData(data)})
    //     .catch(error => {setError(error)});
    // });
    
    const handleChange = (e: React.ChangeEvent<any>) => {
        const name = e.target.name;
        const value = e.target.type === 'checkbox' ? e.target.value = e.target.checked : e.target.value;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleAdd = (e: React.ChangeEvent<any>) => {
        e.preventDefault();
        
        const goods = {
            item_number: values.item_number,
            name: values.name,
            // category: {
            //     name: values.category,
            //     parent: '',
            // },
            price: values.price,
            // description: values.description,
            // hidden: values.hidden,
            // image: values.image,
        }
        axios.post('/goods', {goods})
            .then(res => {
                console.log(res);
                setResponse(res.data);
            })
            .catch(error => {setError(error)})
    }

    const getNameTitle = (item: string) => {
        if (item === "good") 
            return 'товар';
        if (item === "person")
            return 'пользователя';
        if (item === "order")
            return 'заказ';
    };

    const renderForm = (
        <>
            {dataForm.map((value) => {
                return(<Row className="g-2">
                    <FloatingLabel controlId="floatingInputGrid" label={value[1].name}>
                        <Form.Control type={value[1].type} placeholder="text" name={value[0]} onChange={handleChange}/>
                    </FloatingLabel>
                </Row>)
            })}
            <Button variant="primary" size="lg" onClick={handleAdd}>Добавить {getNameTitle(createAddForm.item)}</Button>
            { errors ? <div>Ошибка: {getNameTitle(createAddForm.item)} не добавлен!</div> : ''}
            { responses ? <div>{getNameTitle(createAddForm.item)} добавлен!</div> : ''}
        </>
    );
    return (
       <>
       {createAddForm.data ? renderForm : null}
       </>
    )
};

export default AddFormGood;