import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
	display: flex;
	justify-content: center;
	position: fixed;
	width: 230px;
	height: 100vh;
	background-color: #ffffff;
`;

export const NavContainer = styled.nav`
	display: flex;
	margin-top: 20px;
	flex-direction: column;
	justify-content: space-between;
	.topNav,
	.botNav {
		display: flex;
		flex-direction: column;
	}
`;

export const NavItem = styled.div`
	margin: 10px 0;
	display: flex;
	cursor: pointer;
	align-items: center;
	font-family: 'Poppins';
	font-size: 18px;
	svg {
		margin: 10px;
	}
	a {
		display: flex;
		align-items: center;
		text-decoration: none;
		color: inherit;
	}
	transition: 0.3s;
	:hover {
		color: ${shade(1, '#333333')};
	}
	:active {
		color: #c94217;
	}
`;
