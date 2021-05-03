import React from "react";
import styled, { keyframes } from "styled-components";

type SliderProps = {
  from?: string;
  delay?: string; 
  children: JSX.Element
}

function Slider(props: SliderProps) { 

  const topToBottom = keyframes`
  0% {
    opacity: 0;
    transform: translateX(${props.from || '-30px'});
  }
  80% {
    opacity: .5;
    transform: translateX(0px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
`;

const SliderDiv = styled.div`
  display: inline;
  & span {
    animation: ${topToBottom} 2s linear;
    animation-delay: ${[props.delay || '0s']};
    position: relative;
    opacity: 0;
    animation-fill-mode: forwards;
  }
`;
  return (
    <SliderDiv>
      <span>
        {props.children}
      </span>
    </SliderDiv>
  );
};

export default Slider;
