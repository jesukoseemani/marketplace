import styled from 'styled-components';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import TextTruncate from 'react-text-truncate';
import { useRouter } from 'next/router';
// import { useEffect } from 'react';

function Product({
	id,
	title,
	price,
	category,
	description,
	image,
	rating,
	offer,
	originalPrice,
}) {
	const router = useRouter();

	const discountCal = (oP, dP) => {
		const discount = ((oP - dP) / oP) * 100;
		return discount;
	};

	const productPageHandler = () => {
		// router.reload();
		router.push(`/product/${id}`);
	};

	return (
		<StyledProject onClick={productPageHandler}>
			<div className='img_section'>
				<Image
					src={image}
					alt='product image'
					objectFit='contain'
					width={200}
					height={200}
				/>
				{offer && (
					<div className='discount'>
						{Math.round(discountCal(originalPrice, price))}%
					</div>
				)}
				<div className='profile'>
					<p>View Product</p>
				</div>
			</div>
			<div className='category'>{category.toUpperCase()}</div>
			<div className='description'>
				<TextTruncate
					line={3}
					element='span'
					truncateText='…'
					text={description}
				/>
			</div>

			<div className='price_rating_section'>
				<div className='price'>
					${price.toFixed(2)}
					{originalPrice && (
						<span className='span_price'>
							<del>{originalPrice}</del>
						</span>
					)}
				</div>
				<div className='rating'>
					<FontAwesomeIcon className='box_icon_2' icon={faStar} size='2x' />
					<strong>{rating}</strong>
				</div>
			</div>
		</StyledProject>
	);
}

const StyledProject = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: white;
	transition: all 250ms ease;
	cursor: pointer;

	.img_section {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 1.5rem;
		width: 100%;

		.discount {
			position: absolute;
			top: 1rem;
			right: 0.5rem;
			font-size: 1.4rem;
			border: 1px solid transparent;
			border-radius: 1rem;
			color: #fc4e03;
		}

		.profile {
			position: absolute;
			top: 70%;
			/* right: -50%; */

			/* transform: translate(-50%, -50%); */
			font-size: 1.4rem;
			font-weight: bold;
			border: 1px solid transparent;
			border-radius: 0.5rem;
			background-color: white;
			padding: 1rem;
			z-index: 55;
			opacity: 0;
			visibility: hidden;
			transition: all 250ms ease;
		}
	}

	.category {
		border: 1px solid transparent;
		border-radius: 1rem;
		margin-right: 65%;
		background-color: whitesmoke;
		color: gray;
		padding: 0rem 0.8rem;
		margin-bottom: 1.5rem;
	}

	.description {
		font-size: 1.2rem;
		margin-bottom: 1.5rem;
		width: 100%;
	}

	.price_rating_section {
		display: flex;
		justify-content: space-between;
		align-content: center;
		width: 100%;
		padding: 0rem 1rem;

		.price {
			font-size: 1.5rem;
			font-weight: bold;

			.span_price {
				color: red;
				margin-left: 0.7rem;
				font-size: 1.2rem;
			}
		}
		.rating {
			font-size: 1.4rem;

			.box_icon_2 {
				font-size: 1.5rem;
				color: #ff9900;
			}
		}
	}

	&:hover .profile {
		opacity: 1;
		visibility: visible;
		top: 40%;
	}
`;

export default Product;
