import styled from 'styled-components';
import Product from './Product';
// import shuffleArray from "../util"

function Products({ products }) {
	return (
		<StyledProduct>
			{products[0].map(
				({
					id,
					title,
					price,
					category,
					description,
					image,
					rating,
					offer,
					originalPrice,
				}) => (
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
						originalPrice={originalPrice}
					/>
				)
			)}
		</StyledProduct>
	);
}

const StyledProduct = styled.div`
	display: grid;
	/* grid-template-columns: minmax(37rem, 1fr); */
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 2rem;
	margin: 4rem 4rem;
	@media (max-width: 1050px) {
		grid-template-columns: 1fr 1fr;
	}

	@media (max-width: 810px) {
		grid-template-columns: 1fr;
	}
`;

export default Products;
