function ButtonAddCart({quantityProduct, addProductToCart, removeProductToCart}){
    if (quantityProduct != 0) return (
      <div className="add-to-cart">
        <button onClick={() => removeProductToCart()}>
          <img src='/assets/images/icon-decrement-quantity.svg' alt="Icon decrement to cart" />
        </button>
        {quantityProduct}
        <button onClick={() => addProductToCart()}>
          <img src='/assets/images/icon-increment-quantity.svg' alt="Icon increment to cart" />
        </button>
      </div>
    );
  
    return (
      <button className="add-to-cart-empty" onClick={() => addProductToCart()}>
        <img src='/assets/images/icon-add-to-cart.svg' alt="Icon add to cart" />
        Add to Cart
      </button>
    )
  }
  
  export default ButtonAddCart;