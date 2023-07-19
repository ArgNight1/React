import React from 'react'
import ItemCount from '../components/ItemCount';
import BotonBack from '../components/BotonBack';

const ItemDetail = ({ item }) => {
    return (

        <div className="card">
            <div class="card-body">
                <h1 class="card-title" >{item.title}</h1>
                <p><b class="card-text">Codigo de producto: {item.id}</b></p>
                <br></br>
                <img src={item.pictureUrl} class="card-img-top size margen" />
                <p class="card-text">{item.description}</p>
                <h2 class="card-text">$ {item.price}</h2>
                <br></br>
            </div>
            <div>
            <BotonBack />
                <ItemCount stockItems={10} />

            </div>
        </div>

    );
}



export default ItemDetail;

