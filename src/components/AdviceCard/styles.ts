import styled from 'styled-components';
import Divider from '@/assets/pattern-divider-mobile.svg';

export const Card = styled.article`
  width: calc(100% / 12 * 11);
  background-color: var(--dark-grayish-blue);
  font-size: 1rem;
  padding: 2em;
  border-radius: .6rem;
`;

export const CardHeader = styled.div`
  padding: 1em 0 .5em 0;
`;

export const CardBody = styled.div`
  padding: 1em 0;
  text-align: center;
`;

export const CardFooter = styled.footer`
  padding: .7em 0 2.4em 0;
  position: relative;
`;

export const AdviceCode = styled.p`
  text-align: center;
  color: var(--green);
  font-weight: bold;
  font-size: .8em;
  text-transform: uppercase;
  letter-spacing: 4px;
`;

export const AdviceText = styled.p`
  color: #CEE3E9;
  font-size: 1.9em;
`;

export const Separator = styled.div`
  display: block;
  background-image: url(${Divider});
  background-repeat: no-repeat;
  width: 100%;
  height: 1em;
  background-position: center;
`;

export const DiceButton = styled.button`
  box-shadow: 0px 0px 0px 0px var(--green);
  cursor: pointer;
  background-color: var(--green);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  padding: 1.6em;
  bottom: -100%;
  left: 50%;
  transform: translate(-50%, 0);
  border-radius: 50%;
  transition: box-shadow .3s;

  &:hover {
    box-shadow: 0px 0px 20px 3px var(--green);
  }
`;
