import CartWidget from './subcomponents/CartWidget.js';

const MenuReactJS = () => {
    return (
        <div>
            <section>
            <div className="menu-container">
                <a><h2 className="categories">TIENDA</h2></a>
                <a><h2 className="categories">PAGAR</h2></a>
                <a><h2 className="categories">PEDIDO</h2></a>
                <CartWidget/>
            </div>
            </section>
        </div>
        
    )
}

export default MenuReactJS;