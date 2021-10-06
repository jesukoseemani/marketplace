import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Items from './Items';
import { useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/client';
// import { useEffect } from 'react';

function YourCart() {
	const router = useRouter();
	const [session] = useSession();
	const dispatch = useDispatch();
	const { cartItems } = useSelector((state) => state.products);

	const total = cartItems.reduce(
		(acc, item) => item.price * item.quantity + acc,
		0
	);

	const length = cartItems.reduce((acc, item) => item.quantity + acc, 0);

	return (
		<StyledYourCart>
			<h1>Your Cart</h1>
			<div className='container_cart'>
				<div className='container_cart_left'>
					{cartItems.map((items) => (
						<Items
							key={items.id}
							id={items.id}
							image={items.image}
							title={items.title}
							price={items.price}
							quantity={items.quantity}
							items={items}
						/>
					))}
				</div>

				<div className='container_cart_right'>
					<h1 className='container_cart_right-checkout'>Checkout</h1>

					<h1 className='container_cart_right-total'>Sub-Total: ${total}</h1>
					<p className='container_cart_right-number'>
						Number of items: {length}{' '}
					</p>

					{!session && (
						<div className='payment' onClick={signIn}>
							<strong>Log In/Sign up</strong>
						</div>
					)}

					{session && (
						<div className='payment' onClick={() => router.push('/Ongoing')}>
							<strong>Proceed to payment</strong>
						</div>
					)}
				</div>
			</div>
		</StyledYourCart>
	);
}
const StyledYourCart = styled.div`
	margin: 5rem 3rem 3rem 3rem;

	.container_cart {
		display: flex;
		justify-content: space-between;
		align-items: center;

		@media (max-width: 1250px) {
			flex-direction: column;
			width: 80%;
			/* margin-left: 5rem; */
		}

		@media (max-width: 850px) {
			width: 95%;
			/* margin-left: 5rem; */
		}
	}
	.container_cart_left {
		flex-basis: 60%;
		margin: 3rem 1.5rem 1.5rem 3rem;
		@media (max-width: 1250px) {
			margin: 3rem 1.5rem 1rem 8rem;
		}
		@media (max-width: 850px) {
			margin: 3rem 1.5rem 1rem 2rem;
		}
	}
	.container_cart_right {
		flex-basis: 40%;
		margin: 14rem 1.5rem 1.5rem 3rem;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
		background-color: white;
		outline: none;
		border-radius: 0.8rem;
		padding: 1rem 2rem;

		@media (max-width: 1250px) {
			width: 60%;
			margin: 1rem 0rem 0rem 40rem;
			justify-content: flex-end;
		}

		@media (max-width: 850px) {
			margin: 1rem 0rem 0rem 15rem;
		}

		@media (max-width: 550px) {
			margin: 1rem 0rem 0rem 5rem;
		}

		@media (max-width: 460px) {
			margin: 1rem 0rem 0rem 1rem;
			width: 90%;
		}

		.container_cart_right-checkout {
			margin: 2rem 0rem;
			font-family: 'Inconsolata', monospace;
			font-weight: bold;
			font-size: 2rem;
		}

		.container_cart_right-total {
			margin: 1rem 0rem;
		}
		.container_cart_right-number {
			font-size: 1.4rem;
		}

		.payment {
			padding: 1rem 2rem;
			margin: 3rem 0rem 3rem 0rem;
			box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
			background-color: #ff9900;
			outline: none;
			border-radius: 0.8rem;
			color: white;
			font-size: 1.3rem;
			cursor: pointer;
			/* width: 17rem; */
		}
	}
`;
export default YourCart;
