import './Cart.css';

function Cart(){
    return(
        <div className='cart'>
            <h2>Your Cart (<span>0</span>)</h2>
            <div>
                <img src='/assets/images/illustration-empty-cart.svg' alt="Empty Cart" />
                <p>Your added items will appear here</p>
            </div>
        </div>
    );
}

export default Cart;