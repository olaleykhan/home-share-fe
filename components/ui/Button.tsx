import React from 'react';
import type { NextPage } from 'next';
import styled from 'styled-components';
interface ButtonProps {
	text: string;
	rounded: boolean;
}
const Button: NextPage<ButtonProps> = ({ text, rounded }) => {
	return <Btn rounded={rounded}>{text}</Btn>;
};

interface ButtonInterface {
	rounded: boolean;
}
const Btn = styled.button<ButtonInterface>`
	border: none;
	outline: none;
	border-radius: ${(props) => (props.rounded ? '15px' : '')};
	color: ${(props) => props.theme.colors.primary};
	background-color: ${(props) => props.theme.colors.light};
	border: 1px solid ${(props) => props.theme.colors.primary};
	cursor: pointer;

	padding: 0.5rem 1.2rem;
	font-size: 1.2rem;
	margin: 0px auto;
	&:hover {
		color: ${(props) => props.theme.colors.light};
		background-color: ${(props) => props.theme.colors.primary};
		border: 1px solid ${(props) => props.theme.colors.primary};
	}
`;
export default Button;
