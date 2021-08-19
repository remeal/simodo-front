import React from 'react';
import { Button, FloatingLabel, Form, Row, Col } from 'react-bootstrap';

const FindForm = () => {

    return (
        <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Введите артикул"
                    >
                    <Form.Control type="text" />
                    </FloatingLabel>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
                <FloatingLabel controlId="floatingSelectGrid" label="Выберите категорию">
                <Form.Select aria-label="Floating label select example">
                    <option>Категория 0</option>
                    <option value="1">Категория 1</option>
                    <option value="2">Категория 2</option>
                    <option value="3">Категория 3</option>
                </Form.Select>
                </FloatingLabel>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
                <Button variant="primary" size="lg">Найти товар</Button>
            </Form.Group>
        </Row>
    )
}

export default FindForm;