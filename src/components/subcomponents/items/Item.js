const Item = ({producto}) => {

    return (
        <div>
            <img src={producto.img}/>
            <h3>{producto.nombre}</h3>
            <p>Precio: AR$ {producto.precio}</p>
            <h4>{producto.stock}</h4>
            <p>{producto.desc}</p>
            <a className="verMas">Ver más...</a>
        </div>
    )
}

export default Item;