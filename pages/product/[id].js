import { useRouter } from 'next/router'
import { useSelector } from "react-redux"
import Head from 'next/head'
import {StyledHome, StyledRapper, StyledNav, StyledMain} from '../../StyledComponents'
import NavBar from '../../components/NavBar';
import Header from '../../components/Header'
import ProductDescription from '../../components/ProductDescription';
import SuggestedProduct from '../../components/SuggestedProduct';


function ProductPage() {
  const router = useRouter()
  const { id } = router.query
  const uid = Number(id)
  
  const product = useSelector((state) => state.products?.products?.filter((product) => product.id === uid));
  console.log(product)

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
}

export default ProductPage
