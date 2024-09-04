import './Menu.css';
import Product from './Product';
import jsonData from '../data.json'

function Menu(){
    const chooseImage = (images) => {
        const width = window.innerWidth;

        if (width >= 1024){
            return images.desktop;
        } else if (width >= 600){
            return images.tablet;
        } else if (width >= 350){
            return images.mobile;
        } else{
            return images.thumbnail;
        }
    };
    return(
        <div className='menu'>
            {jsonData.map((element, id)=>(
                <Product key={id} nameProduct={element.name} categoryProduct={element.category} priceProduct={element.price} imgProduct={chooseImage(element.image)} />
            ))}
        </div>
    );   
}

export default Menu;