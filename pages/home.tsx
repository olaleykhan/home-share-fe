import React from 'react';
import styled from 'styled-components';

const home: React.FC = () => {
	return (
		<div>
			<h1> This is the home page</h1>
			<Jumbotron> Hello jumbo</Jumbotron>
			<p>Hi</p>
		</div>
	);
};

const Jumbotron = styled.div`
	height: 200px;
	/* background-color: red; */
	/* background-color: ${({ theme }) => theme.colors.primary || '#ccc'}; */
	color: ${(props) => props.theme.colors?.primary || '#000'};
`;
export default home;
