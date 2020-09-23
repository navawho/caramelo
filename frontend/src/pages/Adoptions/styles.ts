import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	background-color: #e5e5e5;
`;

export const Content = styled.div`
	margin-left: 230px;
	width: 100%;
	justify-content: space-around;
	display: flex;
	h2 {
		margin: 20px 0;
	}
	.cardContainer {
		margin: 20px 0;
	}
`;

export const LeftContent = styled.div`
	display: flex;
	flex-direction: column;
`;

export const RightContent = styled.div`
	display: flex;
	flex-direction: column;
`;
