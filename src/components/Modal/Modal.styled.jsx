import styled from 'styled-components';

export const Backdrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;

	width: 100vw;
	height: 100vh;

	background-color: #00000047;
`;

export const ModalWindow = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translateX(-50%) translateY(-50%);

	padding: 20px;

	background-color: #ffffff;
`;

export const AvatarWrapper = styled.div`
	border-radius: 50%;
	border: 2px solid black;
	background-color: aliceblue;
	overflow: hidden;
`;

export const Avatar = styled.img`
	width: 150px;
`;

export const ClostBtn = styled.button`
	position: absolute;
	top: 10px;
	right: 10px;
`;
