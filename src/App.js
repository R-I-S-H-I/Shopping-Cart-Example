import { useState} from "react";
import itemList from "./itemList";
import Cart from "./Cart";
const App = () =>{
    const [cart, setCart] = useState([]);

    const onAddProduct = (prodName, prodPrice) =>{
        const newItem = {name: prodName, price: prodPrice};
        setCart([...cart, newItem]);
    }

    return(<>
        {/* <a href='Cart.js'>Shopping Cart Page</a> */}
        {itemList.map((item)=>{
            const{name, price} = item;
            return(<div>
                <h2>{name}</h2>
                <h3>{price}</h3>
                <button type="button" onClick={()=>onAddProduct(name, price)}>Add Product: {name}</button>
            </div>)
        })}
    <Cart cart={cart} />

    </>)
}

export default App