import axios from "axios";
import React, {useState} from "react";
import { Button, FloatingLabel, Form, Row, Alert } from "react-bootstrap";

const EditFormGood = (responses:any) => {

    const initialValue = {
        item_number: '',
        name: '',
        category: '',
        price: 0,
        description: '',
        hidden: false,
        image: '',
    };

    const [values, setValues] = useState(initialValue);
    const [errors, setError] = useState<any>(null);
    
    const handleChange = (e: React.ChangeEvent<any>) => {
        const name = e.target.name;
        const value = e.target.type === 'checkbox' ? e.target.value = e.target.checked : e.target.value;
        setValues({
            ...values,
            [name]: value,
        });
    }

    const handleEdit = () => {
        axios.put(`good/${values.item_number}`, {values})
            .catch(error => setError(error))
    }

    return (
        <>
            <Row className="g-2">
                <FloatingLabel controlId="floatingInputGrid" label='Артикул'>
                    <Form.Control type="text" placeholder="text" name="item_number" value={responses.responses.item_number} disabled/>
                </FloatingLabel>
            </Row>
            <Row className="g-2">
                <FloatingLabel controlId="floatingInputGrid" label='Наименование'>
                    <Form.Control type="text" placeholder="text" name="name" value={responses.responses.name} onChange={handleChange}/>
                </FloatingLabel>
            </Row>
            <Row className="g-2">
                <FloatingLabel controlId="floatingInputGrid" label='Стоимость'>
                    <Form.Control type="number" placeholder="number" name="price" value={responses.responses.price} onChange={handleChange}/>
                </FloatingLabel>
            </Row>
            <Row className="g-2">
                <FloatingLabel controlId="floatingInputGrid" label='Описание'>
                    <Form.Control type="text" placeholder="text" name="description" value={responses.responses.description} onChange={handleChange}/>
                </FloatingLabel>
            </Row>
            <Row>
                <FloatingLabel controlId="floatingSelectGrid" label="Выберите категорию">
                    <Form.Select aria-label="Floating label select example" name="category" value={responses.responses.cathegory} onChange={handleChange}>
                        <option>Категория 0</option>
                        <option value="1">Категория 1</option>
                        <option value="2">Категория 2</option>
                        <option value="3">Категория 3</option>
                    </Form.Select>
                </FloatingLabel>
            </Row>
            <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Скрытый" onChange={handleChange} checked={responses.responses.hidden} name='hidden'/>
            </Form.Group>
            <Form.Group controlId="formFileMultiple" className="mb-3">
                <Form.Label>Добавьте изображение товара</Form.Label>
                <Form.Control type="file" multiple />
            </Form.Group>
            <Button variant="primary" size="lg" onClick={handleEdit}>Изменить товар</Button>
            {errors ? <Alert variant='danger'>Произошла ошибка!</Alert> : ''}
        </>
    )
}

export default EditFormGood;