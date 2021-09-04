// import { useSelector } from "react-redux";
import { shuffleArray } from "../util";
import Product from "../components/Product"
import styled from "styled-components"

function SuggestedProduct({products}) {

  // const {products} = useSelector((state) => state.products);

  // let shuffleArray = shuffleArray()
 
  return (
    <>
    <h2>You might also like</h2>
    <StyledSuggest>
      {shuffleArray(products[0]).slice(0, 6).map((data) => (
        <Product key={data.id} 
          title={data.title} 
          price={data.price} 
          category={data.category} 
          description={data.description}
          image={data.image}
          rating={data.rating}
          offer={data.offer}
          originalPrice={data.originalPrice}/>
      ))}
    </StyledSuggest>
    </>
  )
}
const StyledSuggest = styled.div`
display: grid;
/* grid-template-columns: minmax(37rem, 1fr); */
grid-template-columns: 1fr 1fr 1fr;
grid-gap: 2rem;
margin: 6rem 4rem;
`

export default SuggestedProduct
