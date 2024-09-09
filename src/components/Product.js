import './Product.css';
import ButtonAddCart from './ButtonAddCart';
import { useEffect, useState } from 'react';

function Product({image, category, name, price, cart, setCart, removeProduct}){
    const [quantityProduct, setQuantityProduct] = useState(0);
    const product = {
        name: name,
        price: price,
        quantity: quantityProduct
    }

    const addProductToCart = () => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => (item.name === name));
            if (existingProduct){
                return prevCart.map((item) =>
                    item.name === name ? {...item, quantity: item.quantity + 1} : item
                )
            }
            
            return [...prevCart, {...product, quantity: 1}]
        })
    }

    const removeProductToCart = () => {
        removeProduct(product);
    }

    useEffect(() => {
        let quantity = 0;
        cart.map((item) => {
            if (item.name === name){
            return quantity = item.quantity;
            }
            return;
        })
        setQuantityProduct(quantity);
    }, [cart])
    
    return (
        <div className='product' >
            <div className='product-card'>
                <img className='productImage' src={image} alt="Product image"/>
                <ButtonAddCart quantityProduct={quantityProduct} addProductToCart={addProductToCart} removeProductToCart={removeProductToCart} />
            </div>
            <p className='category-product'>{category}</p>
            <p className='name-product'>{name}</p>
            <p className='price-product'>${price.toFixed(2)}</p>
        </div>
    );
}

export default Product;