import Head from 'next/head';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Products from '../components/Products';
import Slider from '../components/Slider';
import {
	StyledHome,
	StyledRapper,
	StyledNav,
	StyledMain,
} from '../StyledComponents';
import db from '../firebase';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToProduct, addToCart } from '../redux/productSlice';
import Footer from '../components/Footer';

export default function Home({ products }) {
	const dispatch = useDispatch();
	const [navInOut, setNavInOut] = useState(false);
	useEffect(() => {
		// const items = db.collection("products")
		// .onSnapshot((snapshot) => {
		//    dispatch(addToProduct(snapshot.docs.map((doc) => doc.data())))
		// });
		dispatch(addToProduct(products[0]));
	}, [products, dispatch]);

	useEffect(() => {
		const getItemFromLocalStorage = JSON.parse(localStorage.getItem('cart'));
		console.log(getItemFromLocalStorage);
		if (getItemFromLocalStorage !== null)
			dispatch(addToCart(...getItemFromLocalStorage));
	}, [dispatch]);

	return (
		<StyledHome>
			<Head>
				<title>MarketPlace || shopping for all</title>
				<meta name='description' content='created by koseemani' />
				<meta
					name='google-site-verification'
					content='Jti0f_f5eneUgrDFGMX7mD3R3G_OCD7KspjlAWfkcss'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<StyledRapper>
				<StyledNav
					style={{
						width: navInOut ? '10rem' : '-10rem',
						display: navInOut ? 'block' : '',
					}}>
					<NavBar navInOut={navInOut} setNavInOut={setNavInOut} />
				</StyledNav>

				<StyledMain style={{ margin: navInOut ? '0rem -3rem' : '0rem 3rem' }}>
					<Header navInOut={navInOut} setNavInOut={setNavInOut} />
					<Slider />
					<Products products={products} />
					<Footer />
				</StyledMain>
			</StyledRapper>
		</StyledHome>
	);
}

export async function getServerSideProps(context) {
	let products = [];

	const productCall = await db
		.collection('products')
		.get()
		.then((res) => {
			products.push(res.docs.map((doc) => doc.data()));
		})
		.catch((err) => err.message);

	return {
		props: {
			products,
		},
	};
}
