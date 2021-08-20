import React from "react";
import { Button, FloatingLabel, Form, Row } from "react-bootstrap";

const EditFormGood = () => {
    const [errors, setError] = useState(null);
    const [responses, setResponse] = useState<any>(null);

    useEffect(() => {
        axios.get(`/goods/${props.match.params.id}`)
            .then(res  => res.data)
            .then(data => {setResponse(data)})
            .catch(error => {setError(error)})
    });
    
    const handleChange = () => {

    }

    const handleAdd = () => {
        
    }

    return (
        <>
            <Row className="g-2">
                <FloatingLabel controlId="floatingInputGrid" label='Артикул'>
                    <Form.Control type="text" placeholder="text" name="item_number" value={responses.item_number} onChange={handleChange}/>
                </FloatingLabel>
            </Row>
            <Row className="g-2">
                <FloatingLabel controlId="floatingInputGrid" label='Наименование'>
                    <Form.Control type="text" placeholder="text" name="name" value={responses.name} onChange={handleChange}/>
                </FloatingLabel>
            </Row>
            <Row className="g-2">
                <FloatingLabel controlId="floatingInputGrid" label='Стоимость'>
                    <Form.Control type="number" placeholder="number" name="price" value={responses.price} onChange={handleChange}/>
                </FloatingLabel>
            </Row>
            <Row className="g-2">
                <FloatingLabel controlId="floatingInputGrid" label='Описание'>
                    <Form.Control type="text" placeholder="text" name="description" value={responses.description} onChange={handleChange}/>
                </FloatingLabel>
            </Row>
            <Row>
                <FloatingLabel controlId="floatingSelectGrid" label="Выберите категорию">
                    <Form.Select aria-label="Floating label select example" name="category" value={responses.cathegory} onChange={handleChange}>
                        <option>Категория 0</option>
                        <option value="1">Категория 1</option>
                        <option value="2">Категория 2</option>
                        <option value="3">Категория 3</option>
                    </Form.Select>
                </FloatingLabel>
            </Row>
            <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Скрытый" onChange={handleChange} checked={responses} name='hidden'/>
            </Form.Group>
            <Form.Group controlId="formFileMultiple" className="mb-3">
                <Form.Label>Добавьте изображение товара</Form.Label>
                <Form.Control type="file" multiple />
            </Form.Group>
            <Button variant="primary" size="lg" onClick={handleAdd}>Добавить товар</Button>
            {/* { errors ? <div>Ошибка: товар не добавлен!</div> : ''}
            { responses ? <div>Товар добавлен!</div> : ''} */}
        </>
    )
}

export default EditFormGood;