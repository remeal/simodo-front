import React, {useEffect, useState} from 'react';
import axios from 'axios';
import FindForm from '../components/FindForm/FindForm';
import GoodItem from '../components/GoodItem/GoodItem';
import { Table } from 'react-bootstrap';


const FindGoods = () => {

    const errorGetGoods = null;

    const resss = {
        "item_number": "3451295",
        "name": "Рубашка белая",
        "category": {
          "name": "string",
          "parent": "string"
        },
        "price": 0,
        "description": "string",
        "hidden": true,
        "image": "string"
    };

    const [errors, setError] = useState(errorGetGoods);
    const [res, setResponse] = useState<any>(null);

    // useEffect(() => {
    //     axios.get('/goods')
    //         .then(res  => res.data)
    //         .then(data => {setResponse(data)})
    //         .catch(error => {setError(error)})
    // });

    return (
        <>
            <h1>Найти товар:</h1>
            <h3>Введите артикул товара или выберете категорию:</h3>
            <FindForm/>
            <h3>Товары:</h3>
            { errors ? <div>Invalid tag value</div> : ''}
            <Table striped hover>
                <thead>
                    <tr>
                    <th>Артикул</th>
                    <th>Наименование</th>
                    <th>Стоимость</th>
                    <th></th>
                    <th></th>
                    </tr>
                </thead>
                {resss ? <GoodItem data={resss}/> : ''}
            </Table>
            {/* { res ? res?.data.map((good:any) => <GoodItem data={good}/>) : ''} */}
            
        </>
    )
}

export default FindGoods;