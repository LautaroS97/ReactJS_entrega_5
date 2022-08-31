import carritoOscuro from './assets/img/carrito-oscuro.png';

const CartWidget = () => {
    return (
        <div>
            <section>
            <div className="carrito-container">
                <a><img id="carrito" src={carritoOscuro} alt='carrito' className="carrito"/></a>
            </div>
            </section>
        </div>
        
    )
}

export default CartWidget;