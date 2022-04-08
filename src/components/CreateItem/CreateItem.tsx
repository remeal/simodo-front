import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Button, FloatingLabel, Form, Row } from 'react-bootstrap';
import { IField, IItem } from './types';

const initialField: IField = {
    type: 'text',
    name: '',
    value: '',
};

const initialValue: IItem = {
    id: initialField,
    name: initialField,
    price: initialField,
    count: initialField,
};


const initialRenderRequest = {
    action: '',
    item: '',
    data: initialValue,
}


const CreateItem = () => {

    const errorPost = null;
    const response = null;

    const [values, setValues] = useState(initialValue);
    const [errors, setError] = useState(errorPost);
    const [dataItem, setData] = useState<any>(initialRenderRequest);
    const [responses, setResponse] = useState(response);

    useEffect(() => {
        axios.get('/render/create')
        .then(res => res.data)
        .then(data => {setData(data)})
        .catch(error => {setError(error)});
    });

    
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
            id: values.id,
            name: values.name,
            price: values.price,
            count: values.count,
        }

        axios.post('/create', {goods})
            .then(res => {
                console.log(res);
                setResponse(res.data);
            })
            .catch(error => {setError(error)})
    }

    const { name, price, count} = dataItem.data;

    const renderForm = (         
        <>
        <Row className="g-2">
            <FloatingLabel controlId="floatingInputGrid" label={name.name}>
                <Form.Control type={name.type} placeholder="text" name={name.name} onChange={handleChange}/>
            </FloatingLabel>
        </Row>
        <Row className="g-2">
            <FloatingLabel controlId="floatingInputGrid" label={price.name}>
                <Form.Control type={price.type} placeholder="text" name={price.name} onChange={handleChange}/>
            </FloatingLabel>
        </Row>
        <Row className="g-2">
            <FloatingLabel controlId="floatingInputGrid" label={count.name}>
                <Form.Control type={count.type} placeholder="text" name={count.name} onChange={handleChange}/>
            </FloatingLabel>
        </Row>
            <Button variant="primary" size="lg" onClick={handleAdd}>Добавить</Button>
            { errors ? <div>Ошибка: не добавлено!</div> : ''}
            { responses ? <div>добавленo!</div> : ''}
        </>
    );
    return (
       <>
       { errors ? <div>Невозможно отрендерить</div> : renderForm}
       </>
    )
};

export default CreateItem;