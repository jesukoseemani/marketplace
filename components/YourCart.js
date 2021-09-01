import styled from "Styled-components"
import {useSelector} from "react-redux"
import Items from "./Items";
import {useRouter} from "next/router"

function YourCart() {
  const router = useRouter()
  const { cartItems } = useSelector((state) => state.products);

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);
  return (
    <StyledYourCart>
       <h1>Your Cart</h1>
      <div className="container_cart">
      <div className="container_cart_left">
      {cartItems.map((items) => (
        <Items 
        key={items.id}
        id={items.id}
        image={items.image}
        title={items.title}
        price={items.price}
        quantity={items.quantity}
        items={items}
        />
      ))}
      </div>

      <div className="container_cart_right">
       <h1 className="container_cart_right-checkout">Checkout</h1>
       
       <h1 className="container_cart_right-total">Sub-Total: ${total}</h1>
       <p className="container_cart_right-number">Number of items: {cartItems.length} </p>
      
       <div className="payment" onClick={() => router.push("/Ongoing")}>
        <strong>Proceed to payment</strong>
       </div>
      </div>
      </div> 
    </StyledYourCart>
  )
}
const StyledYourCart = styled.div`
margin: 5rem 3rem 3rem 3rem;

.container_cart{
display: flex;
justify-content: space-between;
align-items: center;

}
.container_cart_left{
flex: 1;
margin: 3rem 1.5rem 1.5rem 3rem;
}
.container_cart_right{
  flex: 1;
  margin: 14rem 1.5rem 1.5rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
 background-color: white;
 outline: none;
  border-radius: .8rem;
  padding: 1rem 2rem;

.container_cart_right-checkout{
margin: 2rem 0rem;
font-family: 'Inconsolata', monospace;
font-weight: bold; 
font-size:2rem;
}

.container_cart_right-total{
margin: 1rem 0rem;
}
.container_cart_right-number{
font-size: 1.4rem;
}

.payment{
  padding: 1rem 2rem;
 margin:3rem 0rem 3rem 0rem;
 box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
 background-color: #FF9900;
 outline: none;
 border-radius: .8rem;
 color: white;
 font-size:1.3rem;
 cursor: pointer;
 /* width: 17rem; */
}

}
`
export default YourCart
