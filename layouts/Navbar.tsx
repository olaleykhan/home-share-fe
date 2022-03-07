import React, { useState } from 'react';
import type { NextPage } from 'next';
import styled from 'styled-components';
import Link from 'next/link';
// import { Theme } from '../styles/theme';
import Button from '../components/ui/Button';
interface NavProps{
	isActive : boolean
}
const Navbar: NextPage <NavProps> = ({isActive}) => {
	const [navOpen, setNavOpen] = useState(true);
	return (
		<Header>
			<Nav>
				<h2 className='logo'>
					<Link href="/" passHref>HouseMates</Link> 
				</h2>
				{/* {navOpen && ( */}
				<NavCollapse show={navOpen}>
					{' '}
					<ul>
						<li>
							<Link href="/about" passHref>
								<span>About</span>
							</Link>
						</li>
						<li>
							<Link href="/contact" passHref>
								<span>Contact</span>
							</Link>
						</li>
						<li>
							<Link href="/faqs" passHref>
								<span>Faqs</span>
							</Link>
						</li>
					</ul>
					<div className='auth-btn'>
						<Link passHref href='/signin'>
							<Button rounded={true} text='Sign In' />
						</Link> 
					</div>
				</NavCollapse>
				{/* )} */}

				{/* <Toggle> {navOpen ? `` : `&#9776;`}</Toggle> */}
			</Nav>
			<div onClick={() => setNavOpen(!navOpen)}>
				{' '}
				{navOpen ? <Toggle> &#128473; </Toggle> : <Toggle> &#9776;</Toggle>}
			</div>
		</Header>
	);
};
// interface NavProps {
// 	rounded: boolean;
// 	theme: object;
// 	primary: string;
// 	contrastText: string;
// }

// enum VARIANT {
// 	PRIMARY,
// 	SECONDARY,
// }

// interface IProps {
// 	variant?: VARIANT;	
// }

const Header = styled.header`
	position: sticky;
	top: 0;
`;
const Nav = styled.nav`
	display: flex;
	flex-direction: column;
	/* justify-content: center; */
	align-items: center;
	/* margin-bottom: 100px;	 */

	/* background-color: red; */
	width: 100%;
	margin: 0 auto;
	position: absolute;
	background-color: ${({ theme }) => theme.colors.light};
	background-color: #ffffff80;
	.logo {
		margin-bottom: 1.5rem;
	}
	.red {
		background-color: red;
	}

	ul {
		list-style: none;
	}

	.auth-btn {
		margin-top: 1.5rem;
	}
	/* color: ${(props) => props.theme.colors.primary}; */
	/* background-color: ${({ theme }) => theme.colors?.primary}; */

	@media only screen and (min-width: 600px) {
		flex-direction: row;
		justify-content: space-between;
		position: static;
		width: 80%;
		padding-top: 2vh;

		ul {
			display: flex;
			li {
				cursor: pointer;
				span {
					padding: 0.5rem 1rem;
					margin: 0 1.5rem;

					&:hover {
						color: ${({ theme }) => theme.colors.primary};
						border-bottom: 2px solid ${({ theme }) => theme.colors?.primary};
					}
				}
			}
		}

		.logo {
			margin-bottom: 0px;
		}
		.auth-btn {
			margin-top: auto;
		}
	}
`;

const Toggle = styled.div`
	font-size: 1.5rem;
	position: absolute;
	right: 1.5rem;
	top: 1rem;
	cursor: pointer;
	@media only screen and (min-width: 600px) {
		display: none;
	}
`;

const NavCollapse = styled.div<{ show: boolean }>`
	display: ${({ show }) => (show ? 'block' : 'none')};
	
	@media only screen and (min-width: 600px) {
		display: block;
		display: flex;
		align-items: center;
		justify-content: space-between;
		
	}
`;
export default Navbar;
