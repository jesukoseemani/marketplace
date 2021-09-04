import Image from 'next/image'
import styled from "styled-components"
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import {addToCart, removeFromCart} from "../redux/productSlice";
import {useDispatch} from "react-redux";

function Items({id, image, price, quantity, title, items}) {
  const dispatch = useDispatch()

  const removeHandler = () => {
    dispatch(removeFromCart(items))
  }
  const addHandler = () => {
    dispatch(addToCart(items))
  }
  const removeCartHandler = () => {
    dispatch(removeFromCart(items))
  }


  return (
    <StyledItems>
     <div className="items_image">
    {image && <Image
        src={image}
        alt="product image"
        objectFit="contain"
        width={250}
        height={250}
        
      />}
     </div>
     <div className="items_content">
       <div className="items_content_title">
         <p>{title}</p> 
       </div>

       <div className="items_content_cover">
        <div className="items_content_cover_left">
        <h4>${price}</h4>
        </div>

        <div className="items_content_cover_right">
        <div style={{pointerEvents: quantity === 1 ? "none" : ""}}className="removeicon" onClick={removeHandler}>
          <RemoveIcon />
        </div>
        <div className="quantitynum">
          {quantity}
        </div>
        <div className="addicon" onClick={addHandler}>
          <AddIcon />
        </div>
        <div className="removeshoppingicon" onClick={removeCartHandler}>
          <RemoveShoppingCartIcon />
        </div>
        </div>
       </div>
     </div>
    </StyledItems>
  )
}
const StyledItems = styled.div`
display: flex;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
 background-color: white;
 outline: none;
 border: none;
 border-radius: .8rem;
 padding: 1rem;
 margin-bottom: 1rem;
.items_image{
  display: flex;
justify-content: center;
align-items: center;
}

.items_content{
display: flex;
flex-direction: column;
justify-content: space-between;
width: 100%;
height: 20rem;
.items_content_title{
font-size: 2rem;
font-family: 'Inconsolata', monospace;
}

.items_content_cover{
display: flex;
justify-content: space-between;
align-items:center;
width:100%;
  .items_content_cover_left{
    h4{
      font-size: 2rem;
      font-weight: bold;
      color: #000;
    }
  }
  .items_content_cover_right{
    display: flex;
justify-content: space-between;
align-items:center;

    .removeicon{
   border-radius: .5rem;
   padding: .5rem;
   background-color: #d3d8da;
   cursor: pointer;
    }
    .removeshoppingicon{
      margin: 1.5rem;
      border-radius: .5rem;
   padding: .5rem;
   background-color: red;
   color: white;
   cursor: pointer;
    }
    .addicon{
      border-radius: .5rem;
   padding: .5rem;
   background-color: #d3d8da;
   cursor: pointer;
    }
    .quantitynum{
      margin: 1rem;
      font-size:1.3rem;
      font-weight:bold;
    }
  }
}

}

`

export default Items
