import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import dbTemporal from '../components/dataTemp/dbTemporal.json'
import ItemList from '../components/ItemList';

const ItemListContainer = () => {
    const [item, setItem] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(id ? dbTemporal.filter(item => item.category === id) : dbTemporal)
            }, 2000)
        });
        promesa.then((data) => {
            setItem(data)
        })
    }, [id])

    return (
        <div className='container'>
            <div className='row'>
                <ItemList item={item} />
            </div>
        </div>
    )
}

export default ItemListContainer