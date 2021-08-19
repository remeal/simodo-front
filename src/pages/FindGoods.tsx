import React, {useEffect} from 'react';
import axios from 'axios';
import FindForm from '../components/FindForm/FindForm';


const FindGoods = () => {

    useEffect(() => {
        axios.get('/goods')
            .then(res => {
                const goods = res.data;
            })
    });

    return (
        <>
            <h1>Найти товар:</h1>
            <h3>Введите артикул товара или выберете категорию:</h3>
            <FindForm/>
            <h3>Товары:</h3>
            
        </>
    )
}

export default FindGoods;