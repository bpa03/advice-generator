import styled, { keyframes } from 'styled-components';

export const Load = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

export const LoaderWrapper = styled.div`
  overflow: hidden;
`;

export const BaseLoader = styled.div`
  font-size: 10px;
  margin: 50px auto;
  text-indent: -9999em;
  width: 11em;
  height: 11em;
  border-radius: 50%;
  background: #52ffa8;
  background: -moz-linear-gradient(left, #52ffa8 10%, rgba(82,255,168, 0) 42%);
  background: -webkit-linear-gradient(left, #52ffa8 10%, rgba(82,255,168, 0) 42%);
  background: -o-linear-gradient(left, #52ffa8 10%, rgba(82,255,168, 0) 42%);
  background: -ms-linear-gradient(left, #52ffa8 10%, rgba(82,255,168, 0) 42%);
  background: linear-gradient(to right, #52ffa8 10%, rgba(82,255,168, 0) 42%);
  position: relative;
  animation: ${Load} 1.4s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);

  &::before {
    width: 50%;
    height: 50%;
    background: #52ffa8;
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
  }

  &::after {
    background: var(--dark-blue);
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: '';
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;
