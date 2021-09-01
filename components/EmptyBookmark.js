import styled from "styled-components"
import { useRouter } from 'next/router'
import Image from 'next/image'
import empty from "../assets/img/emptyBookmarks.svg"
function EmptyBookmark() {
  const router = useRouter()

  return (
    <StyledEmptyBookmark>
      <h1>Your Bookmarks</h1>
      <div className="container">
      <div className="container_left">
      <Image
        src={empty}
        alt="product image"
        objectFit="contain"
        width={500}
        height={500}
        
      />
      </div>

      <div className="container_right">
        <h3>It's empty here.</h3>
        <p>Something's catching your eye? Add your favorite items to Bookmarks, and check them out anytime you wish.</p>
        <div className="addBookmark_box" onClick={() => router.push("/")}>
        <strong>Go Shopping..</strong>
        </div>
      </div>
      </div>
    </StyledEmptyBookmark>
  )
}


const StyledEmptyBookmark = styled.div`
margin-top:5rem;
margin-left: 3rem;
margin-right: 3rem;
h1{
  font-size: 2.5rem;
}
.container{
 display:flex;
 justify-content: space-between;
 align-items: center;
 height: 70vh;
.container_left{
  width: 50rem;
  height: 40rem;
display: flex;
justify-content: center;
align-items: center;
margin: 0rem 2rem;

  }

.container_right{
flex: 1;
h3{
font-size: 3rem;
font-weight: bold;
margin-bottom: 2rem;
}

p{
font-size: 1.3rem;
}
.addBookmark_box{
 padding: 1rem 2rem;
 margin:5rem 0rem 0rem 0rem;
 box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
 background-color: #FF9900;
 outline: none;
 border-radius: .8rem;
 color: white;
 font-size:1.3rem;
 cursor: pointer;
 width: 14rem;
  }
  }
}
`
export default EmptyBookmark

