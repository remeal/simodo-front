import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Button, FloatingLabel, Form, Row } from 'react-bootstrap';
import { IField, IItem } from './types';

const initialField: IField = {
    type: 'text',
    name: '',
    value: '',
};

const initialIdField: IField = {
    type: 'hidden',
    name: 'Артикуль',
    value: '',
};

const initialValue: IItem = {
    id: initialIdField,
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

    const [values, setValues] = useState<any>(initialValue);
    const [errors, setError] = useState(errorPost);
    const [dataItem, setData] = useState<any>(initialRenderRequest);
    const [responses, setResponse] = useState(response);

    useEffect(() => {
        axios.get('/render/create', {
            headers: {
              'Access-Control-Allow-Origin': true,
            },
        })
        .then(res => res.data)
        .then(data => {setData(data)})
        .catch(error => {setError(error)});
    });

    
    const handleChange = (field: any, e: React.ChangeEvent<any>) => {
        const value = e.target.value;
        const editedField = {...field[1], value};
        setValues({
            ...values,
            [field[0]]: editedField,
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

    const arrayFields: [string, any][] = Object.entries(dataItem.data);

    const renderForm = (         
        <>
        {arrayFields.map((field) => (
        <Row className="g-2">
            <FloatingLabel controlId="floatingInputGrid" label={field[1].name}>
                <Form.Control type={field[1].type} placeholder="text" name={field[1].name} onChange={(e) => handleChange(field, e)}/>
            </FloatingLabel>
        </Row>))}
        <Button variant="primary" size="lg" onClick={handleAdd}>Добавить {dataItem.item}</Button>
        { errors ? <div>Ошибка: {dataItem.item} не добавлено!</div> : ''}
        { responses ? <div>{dataItem.item} добавленo!</div> : ''}
        </>
    );
    return (
       <>
       { errors ? <div>Невозможно отрендерить</div> : renderForm}
       </>
    )
};

export default CreateItem;