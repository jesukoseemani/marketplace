import styled from 'styled-components';

export const StyledHome = styled.div`
	width: 100%;
	max-width: 153rem;
	margin: 0 auto;
	position: relative;
`;

export const StyledRapper = styled.main`
	display: flex;
`;

export const StyledNav = styled.div`
	width: 10rem;
	min-width: 10rem;
	height: 100vh;
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 12px;
	position: sticky;
	top: 0;
	left: 0;

	@media (max-width: 1050px) {
		display: none;
	}
`;
export const StyledMain = styled.div`
	width: 100%;
`;
