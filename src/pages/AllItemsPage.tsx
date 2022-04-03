import React, {useEffect, useState} from 'react';
import axios from 'axios';
import FindForm from '../components/FindForm/FindForm';
import GoodItem from '../components/Item/Item';
import { Table } from 'react-bootstrap';
import Item from '../components/Item/Item';


const FindGoods = () => {

    const errorGetGoods = null;

    const createAddForm = {
        "item": "good",
        "data": [
            {
                "id": {
                    "type": "number",
                    "name": "Артикул",
                    "value": "1234567",
                },
                "name": {
                    "type": "text",
                    "name": "Наименование товара",
                    "value": "Платье шелковое",
                },
                "price": {
                    "type": "number",
                    "name": "Цена товара",
                    "value": "1000",
                },
                "count": {
                    "type": "number",
                    "name": "Количество товара",
                    "value": "3",
                }
            },
            {
                "id": {
                    "type": "number",
                    "name": "Артикул",
                    "value": "1234569",
                },
                "name": {
                    "type": "text",
                    "name": "Наименование товара",
                    "value": "Джинсы"
                },
                "price": {
                    "type": "number",
                    "name": "Цена товара",
                    "value": "1500",
                },
                "count": {
                    "type": "number",
                    "name": "Количество товара",
                    "value": "23",
                }
            },
        ]
    };

    const [errors, setError] = useState(errorGetGoods);
    const [res, setResponse] = useState<any>(null);

    // useEffect(() => {
    //     axios.get('/all')
    //         .then(res  => res.data)
    //         .then(data => {setResponse(data)})
    //         .catch(error => {setError(error)})
    // });

    return (
        <>
            <h3>Все товары:</h3>
            { errors ? <div>Invalid tag value</div> : ''}
            <Table striped hover>
                <thead>
                    <tr>
                    <th>Артикул</th>
                    <th>Наименование</th>
                    <th>Стоимость</th>
                    <th>Количество</th>
                    <th></th>
                    <th></th>
                    </tr>
                </thead>
                {/* {resss ? <GoodItem data={resss}/> : ''} */}
                { createAddForm.data ? createAddForm.data.map((item: any) => <Item data={item} />) : ''}
                {/* { res ? res?.data.map((good:any) => <GoodItem data={good}/>) : ''} */}
            </Table>
        </>
    )
}

export default FindGoods;