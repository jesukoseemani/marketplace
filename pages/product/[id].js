import { useRouter } from 'next/router'
import { useSelector } from "react-redux"
import Head from 'next/head'
import {StyledHome, StyledRapper, StyledNav, StyledMain} from '../../StyledComponents'
import NavBar from '../../components/NavBar';
import Header from '../../components/Header'
import ProductDescription from '../../components/ProductDescription';
import SuggestedProduct from '../../components/SuggestedProduct';
import db from "../../firebase"


function ProductPage({products}) {
  const router = useRouter()
  const { id } = router.query
  const uid = Number(id)
  
  // const product = useSelector((state) => state.products?.products?.filter((product) => product.id === uid));
  // console.log(product)

  const product = products[0].filter((product) => product.id === uid);

  

  return (
    <StyledHome>
      <Head>
        <title>MarketPlace || shopping for all</title>
        <meta name="description" content="created by koseemani" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <StyledRapper>
    
    <StyledNav>
      <NavBar />
    </StyledNav>
    
    <StyledMain>
     <Header />
     <ProductDescription product={product}/>
     <SuggestedProduct />
    </StyledMain>
    
    </StyledRapper>
     
    </StyledHome>
  )
}export async function getServerSideProps(context) {
  let products = []
  
  const productCall = await db.collection("products")
  .get()
  .then((res) => {
    products.push(res.docs.map((doc) => doc.data()));
  }
  )
  .catch((err) => err.message)
   

  return {
    props: {
      products,
    },
  };
}

export default ProductPage
