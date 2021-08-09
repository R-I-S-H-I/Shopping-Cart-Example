const Cart = ({cart}) =>{
    return(<>
        <br /><br /><br />
        <h1>This is the Cart</h1>
        {cart.map((item)=>{
            const {name, price} = item;
            return(<div>
                <h2>{name}</h2>
                <h3>{price}</h3>
            </div>)
        })}
    </>)
}
export default Cart