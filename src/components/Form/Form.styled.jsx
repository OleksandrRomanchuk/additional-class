import styled from 'styled-components';

export const AddForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;

	margin-top: 20px;

	font-size: 16px;
`;

export const Label = styled.label`
	display: flex;
	justify-content: space-between;
	:not(:first-child) {
		margin-top: 10px;
	}
`;

export const Input = styled.input`
	min-width: 200px;
	margin-left: 8px;

	font-size: 16px;
`;

export const Btn = styled.button`
	margin: 0 auto;
	margin-top: 10px;

	font-size: 16px;
`;

export const CloseBtn = styled.button`
	margin-top: 25px;

	border: none;
	background-color: transparent;

	transition: color 250ms linear;

	:hover,
	:focus {
		color: orangered;
	}
`;
