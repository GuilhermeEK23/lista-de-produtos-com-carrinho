import { useEffect, useState } from 'react';
import './Menu.css';
import Product from './Product';

function Menu({dataProducts, cart, setCart, removeProduct}){
    const [listProducts, setListProduct] = useState([])

    //Função que recebe a largura atual do dispositivo e a lista de imagens, para retornar apenas uma das imagens que será utilizada
    const chooseImage = (width, images) => {
        if (width > 1024){
            return images.desktop;
        } else if (width > 600){
          return images.tablet;
        } else if (width > 280){
          return images.mobile;
        }
        return images.thumbnail;
    }

    //Função para atualizar a lista de produtos com as imagens certas já selecionadas
    const updateListProducts = () => {
        const width = window.innerWidth;
        return setListProduct(() => {
            return dataProducts.map((item) => {
                const newImage = chooseImage(width, item.image);
                return {
                    ...item,
                    image: newImage
                }
            })
        })
    }

    //useEffect para adicionar o eventListener que identifica o redimensionamento da página para atualizar a lista de produtos com a imagem correta; e para carregar a lista de produtos uma vez só assim que o componente é carregado
    useEffect(() => {
        window.addEventListener('resize', updateListProducts);

        updateListProducts();  

        //CleanUp para remover o eventListener quando o componente for desmontado
        return () => {
        window.removeEventListener('resize', updateListProducts);
        }
    }, []);

    return(
        <div className='menu'>
            {listProducts.map((product, key) => 
                <Product key={key} image={product.image} category={product.category} name={product.name} price={product.price} cart={cart} setCart={setCart} removeProduct={removeProduct} />
            )}
        </div>
    );   
}

export default Menu;