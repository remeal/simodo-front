import axios from 'axios';
import React, {useState} from 'react';
import { Button, FloatingLabel, Form, Row, Col } from 'react-bootstrap';

const FindForm = () => {

    const initialValue = {
        item_number: '',
        category: '',
    };

    const [values, setValues] = useState(initialValue);
    const [res, setResponse] = useState<any>(null);
    const [errors, setError] = useState<any>(null);

    const handleFind = (e: React.ChangeEvent<any>) => {
        values.item_number && axios.get('/goods/findByTags') //здесь непонятно как передавать параметры
            .then(res => res.data)
            .then(data => {setResponse(data)})
            .catch(error => {setError(error)});
        
        values.category && axios.get('/goods/')
    };

    const handleChange = (e: React.ChangeEvent<any>) => {
        const name = e.target.name;
        setValues({
            ...values,
            [name]: e.target.value,
        });
    };

    return (
        <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Введите артикул"
                    >
                    <Form.Control type="text" name="item_number" onChange={handleChange}/>
                    </FloatingLabel>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
                <FloatingLabel controlId="floatingSelectGrid" label="Выберите категорию">
                <Form.Select aria-label="Floating label select example" name="category" onChange={handleChange}>
                    <option>Категория 0</option>
                    <option value="1">Категория 1</option>
                    <option value="2">Категория 2</option>
                    <option value="3">Категория 3</option>
                </Form.Select>
                </FloatingLabel>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
                <Button variant="primary" size="lg" onClick={handleFind}>Найти товар</Button>
            </Form.Group>
        </Row>
    )
}

export default FindForm;