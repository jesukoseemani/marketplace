import styled from "Styled-components"
import {useSelector} from "react-redux"
import Product from './Product';

function YourBookmark() {
  const { bookmark } = useSelector((state) => state.products);

  
  return (
    <StyledYourBookmark>
      <h1>Your Bookmark</h1>
      <StyledBookmark>
      {
        bookmark.map(({id, title, price, category, description, image, rating, offer, originalPrice}) => (
          <Product 
          key={id}
          id={id} 
          title={title} 
          price={price} 
          category={category} 
          description={description}
          image={image}
          rating={rating}
          offer={offer}
          originalPrice={originalPrice} />
        ))
      }
    </StyledBookmark>
      
    </StyledYourBookmark>
  )
}
const StyledYourBookmark = styled.div`
margin: 5rem 3rem 3rem 3rem;


`

const StyledBookmark = styled.div`
display: grid;
/* grid-template-columns: minmax(37rem, 1fr); */
grid-template-columns: 1fr 1fr 1fr;
grid-gap: 2rem;
margin: 4rem 4rem;
`
export default YourBookmark
