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

    const createFindForm = {
        "action": "read",
        "item": "order",
        "params": "id",
        "data": {
            "field": {
                "type": "text",
                "name": "Введите артикул",
            }
        }
    };
    const dataForm = Object.entries(createFindForm.data);

    const handleFind = (e: React.ChangeEvent<any>) => {
        values.category && axios.get('/goods/findByTags') //здесь непонятно как передавать параметры
            .then(res => res.data)
            .then(data => {setResponse(data)})
            .catch(error => {setError(error)});
        
        values.item_number && axios.get(`/goods/${values.item_number}`)
            .then(res => res.data)
            .then(data => {setResponse(data)})
            .catch(error => {setError(error)});
    };

    const handleChange = (e: React.ChangeEvent<any>) => {
        const name = e.target.name;
        setValues({
            ...values,
            [name]: e.target.value,
        });
    };

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
                return(<Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <FloatingLabel
                            controlId="floatingInput"
                            label={value[1].name}
                        >
                        <Form.Control type={value[1].type} name={value[0]} onChange={handleChange}/>
                        </FloatingLabel>
                    </Form.Group>
                </Row>)
            })}
            <Form.Group as={Col} controlId="formGridZip">
                <Button variant="primary" size="lg" onClick={handleFind}>Найти {getNameTitle(createFindForm.item)}</Button>
            </Form.Group>
        </>
    );

    return (
        renderForm
    )
}

export default FindForm;