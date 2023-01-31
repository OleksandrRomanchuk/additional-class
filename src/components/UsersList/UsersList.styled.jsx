import styled from 'styled-components';

export const List = styled.ul`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 10px;

	@media screen and (min-width: 768px) {
		grid-template-columns: repeat(3, 1fr);
		gap: 20px;
	}

	@media screen and (min-width: 1280px) {
		grid-template-columns: repeat(4, 1fr);
	}
`;

export const Item = styled.li`
	padding: 10px;

	border: 1px solid #d4d4d4;
	border-radius: 4px;
`;

export const Info = styled.p`
	font-weight: 500;

	:not(:first-child) {
		margin-top: 4px;
	}
`;

export const InfoSpan = styled.span`
	font-weight: 400;
`;

export const JobInfo = styled.span`
	font-weight: 400;
	color: ${({ employed }) => (employed ? '#2fcc21' : 'orangered')};
`;

export const BtnList = styled.ul`
	display: grid;
	grid-template-columns: repeat(3, 1fr);

	margin-top: 10px;
`;

export const BtnItem = styled.li`
	:not(:first-child) {
		margin-left: 3px;
	}
`;

export const Btn = styled.button`
	width: 100%;
	height: 100%;

	padding: 2px 0;
`;
