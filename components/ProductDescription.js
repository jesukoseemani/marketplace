import styled from 'styled-components';
import Image from 'next/image';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import TurnedInIcon from '@material-ui/icons/TurnedIn';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
	addToCart,
	removeFromCart,
	addToBookmark,
	removeFromBookmark,
} from '../redux/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Bookmark } from '@material-ui/icons';

function ProductDescription({ product }) {
	const [content, setContent] = useState(false);
	const [bookmark, setBookmark] = useState(false);
	const reduxItems = useSelector((state) => state.products);
	const dispatch = useDispatch();
	const router = useRouter();

	useEffect(() => {
		const bIndex = reduxItems.bookmark
			? reduxItems.bookmark.findIndex((item) => item.id === product[0].id)
			: null;

		if (bIndex >= 0) {
			setBookmark(true);
		} else {
			setBookmark(false);
		}

		const cIndex = reduxItems.cartItems
			? reduxItems.cartItems.findIndex((item) => item.id === product[0].id)
			: null;

		if (cIndex >= 0) {
			setContent(true);
		} else {
			setContent(false);
		}
	}, [reduxItems.bookmark, reduxItems.cartItems, product]);

	// useEffect(() => {
	// 	router.events.on('routeChangeComplete', (url) => {
	// 		// router.reload();
	// 		const id = url.split('/')[2] * 1;

	// 		reduxItems.cartItems.forEach((item) => {
	// 			if (item.id !== id) {
	// 				setContent(false);
	// 				console.log(item.id, ' == ', id);
	// 			} else if (item.id == id) {
	// 				setContent(true);
	// 			}
	// 		});

	// 		reduxItems.bookmark.map((item) => {
	// 			if (item.id !== id) {
	// 				setBookmark(false);
	// 			}
	// 		});
	// 	});
	// 	return () => {
	// 		router.events.off('routeChangeComplete', () => {
	// 			console.log('stoped');
	// 		});
	// 	};
	// }, [reduxItems.cartItems, reduxItems.bookmark, router.events, product.id]);

	const omo = { ...product[0], quantity: 1 };

	const addCartHandler = () => {
		dispatch(addToCart(omo));
		setContent(true);
	};

	const removeCartHandler = () => {
		dispatch(removeFromCart(omo));
		setContent(false);
	};

	const addBookMarkHandler = () => {
		dispatch(addToBookmark(omo));
		setBookmark(true);
	};

	const removeBookMarkHandler = () => {
		dispatch(removeFromBookmark(omo));
		setBookmark(false);
	};

	return (
		<StyledProductD>
			<div className='left'>
				{product[0] && (
					<Image
						src={product[0]?.image}
						alt='product image'
						objectFit='contain'
						width={400}
						height={400}
					/>
				)}
			</div>
			<div className='right'>
				<h3>{product[0]?.title}</h3>
				<div className='right_desc'>
					<li>{product[0]?.description}</li>
				</div>
				<p className='price'>${product[0]?.price}</p>
				<p className='free'>
					<LabelImportantIcon />
					Free Delivery Available - Lagos, Nigeria
				</p>
				<div className='cart_flex'>
					{!content && (
						<div className='addcart_box' onClick={addCartHandler}>
							<AddShoppingCartIcon
								style={{ fontSize: '2rem', marginRight: '1rem' }}
							/>
							<strong>Add to Cart</strong>
						</div>
					)}
					{content && (
						<div
							style={{ backgroundColor: 'red' }}
							className='addcart_box'
							onClick={removeCartHandler}>
							<RemoveShoppingCartIcon
								style={{ fontSize: '2rem', marginRight: '1rem' }}
							/>
							<strong>Remove to Cart</strong>
						</div>
					)}

					{!bookmark && (
						<div className='bookmark' onClick={addBookMarkHandler}>
							<BookmarkBorderIcon
								style={{ fontSize: '2rem', color: 'white' }}
							/>
						</div>
					)}

					{bookmark && (
						<div className='bookmark' onClick={removeBookMarkHandler}>
							<TurnedInIcon style={{ fontSize: '2rem', color: 'white' }} />
						</div>
					)}
				</div>
			</div>
		</StyledProductD>
	);
}

const StyledProductD = styled.div`
	display: flex;
	padding: 6rem 2rem;
	width: 85%;
	margin: 0 auto;

	.left {
		/* width: 40rem;
height: 40rem; */
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 10px;
		padding: 5rem 2rem;
	}

	.right {
		display: flex;
		align-items: flex-start;
		justify-content: center;
		flex-direction: column;
		flex: 1;
		margin: 3rem;

		h3 {
			font-family: 'Inconsolata', monospace;
			font-size: 1.8rem;
			margin-bottom: 4rem;
		}

		.right_desc {
			display: flex;
			align-items: center;

			li {
				position: relative;
				padding: 0;
				line-height: 1.2;
				margin-bottom: 1rem;
				font-size: 1.3rem;
				text-align: justify;

				&::before {
					content: '';
					position: absolute;
					width: 10px;
					height: 10px;
					background: #f90;
					border-radius: 5px;
					box-shadow: inset -3px -3px 0 #1a1a2c;
					z-index: 98;
					top: 0;
					left: 0;
				}
			}
		}
		.price {
			font-size: 3rem;
			font-weight: bold;
			margin: 3rem 0;
		}
		.free {
			display: flex;
			justify-content: center;
			align-items: center;
			color: #ff9900;
			font-size: 1.2rem;
		}

		.cart_flex {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			width: 100%;
			margin: 4rem 0rem;

			.addcart_box {
				padding: 1rem 2rem;
				box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
				background-color: #ff9900;
				outline: none;
				border-radius: 0.8rem;
				display: flex;
				justify-content: center;
				align-items: center;
				color: white;
				font-size: 1.3rem;
				cursor: pointer;
			}
			.bookmark {
				border-radius: 0.8rem;
				margin-left: 2rem;
				padding: 0.8rem;
				background-color: #000000;
				cursor: pointer;
			}
		}
	}
`;

export default ProductDescription;
