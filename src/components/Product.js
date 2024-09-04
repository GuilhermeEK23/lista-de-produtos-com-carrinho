import './Product.css';

function Product({nameProduct, categoryProduct, priceProduct, imgProduct}){
    console.log(imgProduct);
    return (
        <div className='product'>
            <div className='product-card'>
                <img src={imgProduct} alt="Product image"/>
                <button className='add-to-cart'>
                    <img src='/assets/images/icon-add-to-cart.svg' alt="Icon add to cart" />
                    Add to Cart
                </button>
            </div>
            <p className='category-product'>{categoryProduct}</p>
            <p className='name-product'>{nameProduct}</p>
            <p className='price-product'>${priceProduct.toFixed(2)}</p>
        </div>
    );
}

export default Product;