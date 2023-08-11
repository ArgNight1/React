import React from 'react'
import Item from '../components/Item';

const ItemList = ({ data }) => {
    return (
      <div className="row justify-content-center" id="itemlist">
        {data.map((item) => (
          <div className="col-md-3 mb-3" key={item.id}>
            <Item item={item} />
          </div>
        ))}
      </div>
    );
  };
  
  export default ItemList;
