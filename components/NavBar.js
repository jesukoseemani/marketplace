import styled from 'styled-components';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faHome,
	faUser,
	faShoppingCart,
	faBookmark,
	faPeopleCarry,
	faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import ReactTooltip from 'react-tooltip';
import Image from 'next/image';
import martlogo from '../assets/img/MARTLOGO.png';
import { useSelector } from 'react-redux';
import { signIn, signOut, useSession } from 'next-auth/client';

function NavBar({ navInOut, setNavInOut }) {
	const { cartItems, bookmark } = useSelector((state) => state.products);
	const [session] = useSession();
	return (
		<StyledNav>
			<div className='times' onClick={() => setNavInOut(false)}>
				<FontAwesomeIcon
					className='times__style'
					icon={faTimesCircle}
					size='3x'
				/>
			</div>

			<div className='icon_nav_line'>
				<Image
					src={martlogo}
					alt='company logo'
					// width={2000}
					// height={2000}
					objectFit='contain'
				/>
			</div>

			<ul>
				<li data-tip='Home' data-for='sidebarTooltip'>
					<Link href='/' passHref>
						<FontAwesomeIcon
							className='box_icon active'
							icon={faHome}
							size='2x'
						/>
					</Link>
					{/* <div className="rounded">1</div>  */}
				</li>
				<li data-tip='Cart' data-for='sidebarTooltip'>
					<Link href='/Cart' passHref>
						<FontAwesomeIcon
							className='box_icon'
							icon={faShoppingCart}
							size='2x'
						/>
					</Link>
					<div className='rounded'>{cartItems.length}</div>
				</li>
				<li data-tip='BookMarker' data-for='sidebarTooltip'>
					<Link href='/Bookmark' passHref>
						<div className='icon'>
							<FontAwesomeIcon
								className='box_icon'
								icon={faBookmark}
								size='2x'
							/>
							<FontAwesomeIcon
								className='box_icon_2'
								icon={faBookmark}
								size='2x'
							/>
						</div>
					</Link>
					<div className='rounded'>{bookmark.length}</div>
				</li>
				<li data-tip='Order' data-for='sidebarTooltip'>
					<Link href='/Order' passHref>
						<FontAwesomeIcon
							className='box_icon'
							icon={faPeopleCarry}
							size='2x'
						/>
					</Link>
					{/* <div className="rounded">1</div>  */}
				</li>
			</ul>

			<div
				className='icon_user'
				data-tip={!session ? 'Sign In' : 'Sign Out'}
				data-for='sidebarTooltip'
				onClick={!session ? signIn : signOut}>
				{!session && (
					<FontAwesomeIcon className='box_icon' icon={faUser} size='2x' />
				)}
				{session && (
					<div className='user_image_auth'>
						<Image
							src={session.user.image}
							alt='company logo'
							width={200}
							height={200}
							objectFit='cover'
							borderRadius='50%'
						/>
					</div>
				)}
			</div>
			<ReactTooltip
				place='right'
				className='app__toolTip'
				id='sidebarTooltip'
				backgroundColor='#1a1a2cee'
				effect='solid'
			/>
		</StyledNav>
	);
}
const StyledNav = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 4.5rem 0;

	.times {
		display: none;

		@media (max-width: 1050px) {
			display: flex;
			color: #ff9900;
		}
	}
	.icon_nav_line {
		@media (max-width: 1050px) {
			display: none;
		}
	}

	ul {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;

		.app__toolTip {
			border-radius: 0.5rem !important;
			box-shadow: 0.25rem 0.25rem 0.5rem rgba(0, 0, 0, 0.15) !important;
		}

		.app__toolTipRed {
			box-shadow: 0.25rem 0.25rem 0.5rem rgb(220, 20, 60, 0.15) !important;
		}

		li {
			margin: 2rem 0;
			cursor: pointer;
			transform: scale(0.8);
			transition: all 250ms ease;
			position: relative;

			.rounded {
				width: 2rem;
				height: 2rem;
				text-align: center;
				padding: 0.5rem;
				border-radius: 50%;
				position: absolute;
				top: -0.8rem;
				left: 1.75rem;
				background-color: #ff9900;
				color: white;
				display: flex;
				justify-content: center;
				align-items: center;
			}

			&:hover {
				transform: scale(1);
			}
			.box_icon {
				font-size: 2.5rem;
				&.active {
					color: #ff9900;
				}
			}
		}
	}

	.icon {
		position: relative;

		.box_icon_2 {
			position: absolute;
			top: 0.7rem;
			left: 1rem;
		}
	}

	.icon_user {
		border: 1px solid black;
		border-radius: 50%;
		padding: 1rem;
		cursor: pointer;

		.user_image_auth {
			width: 3rem;
			height: 3rem;
			/* border-radius: 50%; */
		}
	}
`;

export default NavBar;
