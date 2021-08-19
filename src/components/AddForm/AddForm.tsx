import axios from 'axios';
import React, {useState} from 'react'
import { Button, FloatingLabel, Form, Row } from 'react-bootstrap';

const initialValue = {
    item_number: '',
    name: '',
    category: '',
    price: 0,
    description: '',
    hidden: false,
    image: '',
};


const AddForm = () => {

    const errorPost = null;
    const response = null;

    const [values, setValues] = useState(initialValue);
    const [errors, setError] = useState(errorPost);
    const [responses, setResponse] = useState(response);

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
            category: {
                name: values.category,
                parent: '',
            },
            price: values.price,
            description: values.description,
            hidden: values.hidden,
            image: values.image,
        }
        console.log(goods);
        axios.post('/goods', {goods})
            .then(res => {
                console.log(res);
                setResponse(res.data);
            })
            .catch(error => {setError(error)})
    }
    return (
        <>
            <Row className="g-2">
                <FloatingLabel controlId="floatingInputGrid" label='Артикул'>
                    <Form.Control type="text" placeholder="text" name="item_number" onChange={handleChange}/>
                </FloatingLabel>
            </Row>
            <Row className="g-2">
                <FloatingLabel controlId="floatingInputGrid" label='Наименование'>
                    <Form.Control type="text" placeholder="text" name="name" onChange={handleChange}/>
                </FloatingLabel>
            </Row>
            <Row className="g-2">
                <FloatingLabel controlId="floatingInputGrid" label='Стоимость'>
                    <Form.Control type="number" placeholder="number" name="price" onChange={handleChange}/>
                </FloatingLabel>
            </Row>
            <Row className="g-2">
                <FloatingLabel controlId="floatingInputGrid" label='Описание'>
                    <Form.Control type="text" placeholder="text" name="description" onChange={handleChange}/>
                </FloatingLabel>
            </Row>
            <Row>
                <FloatingLabel controlId="floatingSelectGrid" label="Выберите категорию">
                    <Form.Select aria-label="Floating label select example" name="category" onChange={handleChange}>
                        <option>Категория 0</option>
                        <option value="1">Категория 1</option>
                        <option value="2">Категория 2</option>
                        <option value="3">Категория 3</option>
                    </Form.Select>
                </FloatingLabel>
            </Row>
            <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Скрытый" onChange={handleChange} name='hidden'/>
            </Form.Group>
            <Form.Group controlId="formFileMultiple" className="mb-3">
                <Form.Label>Добавьте изображение товара</Form.Label>
                <Form.Control type="file" multiple />
            </Form.Group>
            <Button variant="primary" size="lg" onClick={handleAdd}>Добавить товар</Button>
            { errors ? <div>Ошибка: товар не добавлен!</div> : ''}
            { responses ? <div>Товар добавлен!</div> : ''}
        </>
    )
};

export default AddForm;