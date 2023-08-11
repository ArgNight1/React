import React from 'react'
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import dbTemporal from '../components/dataTemp/dbTemporal.json'
import ItemDetail from '../components/ItemDetail';


const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const { id } = useParams();

    useEffect(() => {

        // const fetchData = async () => {
        //     try {
        //         const data = await new Promise((resolve) => {
        //             setTimeout(() => {
        //                 resolve(id ? dbTemporal.filter(item => item.category === id) : dbTemporal)
        //             }, 2000);
        //         });
        //         setItem(data);
        //     } catch (error) {
        //         console.log('Error:', error);
        //     }
        // };  hasta la linea 34

        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(dbTemporal.find(item => item.id === parseInt(id)))
            }, 2000)
        });
        promesa.then((data) => {
            setItem(data)
        })
    }, [id])

    return (
        <div className='container'>
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer