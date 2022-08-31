import { useEffect, useState } from 'react';
import Contador from './subcomponents/Counter.js';
import ItemList from './subcomponents/ItemList.js';
import { pedirDatos } from '../helpers/pedirDatos.js';

const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([])
    
    useEffect(() => {
        pedirDatos()
            .then((res) => {
                setProductos(res)
            })
        .catch((error) => {
            console.log(error)
            })
        }, [])

    return (
        <div>
            <section>
            <div>
            <div>
            <ItemList productos={productos}/>
            </div>   
            <Contador/>
            </div>
            </section>
        </div>
    )
}

export default ItemListContainer;