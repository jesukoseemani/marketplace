import Head from 'next/head';
import {
	StyledHome,
	StyledRapper,
	StyledNav,
	StyledMain,
} from '../StyledComponents';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import EmptyCart from '../components/EmptyCart';
import { useSelector } from 'react-redux';
import YourCart from '../components/YourCart';

function Cart() {
	const { cartItems, trigger } = useSelector((state) => state.products);
	return (
		<StyledHome>
			<Head>
				<title>MarketPlace || shopping for all</title>
				<meta name='description' content='created by koseemani' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<StyledRapper>
				<StyledNav
					style={{
						width: trigger ? '10rem' : '-10rem',
						display: trigger ? 'block' : '',
					}}>
					<NavBar />
				</StyledNav>

				<StyledMain>
					<Header />

					{cartItems.length ? <YourCart /> : <EmptyCart />}
				</StyledMain>
			</StyledRapper>
		</StyledHome>
	);
}

export default Cart;
