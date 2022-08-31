import Item from './items/Item.js';

const ItemList = ({productos = []}) => {

    return(
        <div className="container-producto">
            <h2>PRODUCTOS</h2>
            <hr/>
            {productos.map((prod) => <Item producto={prod} key={prod.id}/>)}
        </div>
    )
}

export default ItemList;