import styled from 'styled-components';

export const Container = styled.div`
	height: 100vh;

	display: flex;
	align-items: stretch;
`;

export const Content = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 100%;
`;

export const Card = styled.div`
	display: flex;
	flex-direction: column;

	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
	border-radius: 8px;

	background-color: #fff;

	padding: 42px;

	h3 {
		font-size: 30px;
		margin-bottom: 18px;
	}
`;

export const Inputs = styled.div`
	display: flex;
	flex-direction: column;

	label:last-of-type {
		margin-top: 18px;
	}

	label {
		font-size: 24px;
		margin-bottom: 12px;
	}

	button {
		margin-top: 36px;

		border-radius: 24px;
		padding: 12px 36px;

		color: #fff;
	}
`;
