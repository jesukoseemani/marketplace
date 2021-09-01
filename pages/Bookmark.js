import Head from 'next/head'
import {StyledHome, StyledRapper, StyledNav, StyledMain} from '../StyledComponents'
import NavBar from '../components/NavBar';
import Header from '../components/Header'
import EmptyBookmark from '../components/EmptyBookmark';
import {useSelector} from "react-redux"
import YourBookmark from '../components/YourBookmark';

function Bookmark() {

  const { bookmark } = useSelector((state) => state.products);
  
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
  
   {
     bookmark.length ? <YourBookmark /> :  <EmptyBookmark />
   }
   
  </StyledMain>
  
  </StyledRapper>
   
  </StyledHome>
  )
}


export default Bookmark
