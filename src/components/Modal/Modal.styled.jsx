import styled from "styled-components";

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

width: 400px;
height: 500px;

background-color: #ffffff;
`;