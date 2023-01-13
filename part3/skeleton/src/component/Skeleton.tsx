import React, { useMemo } from "react";
import styled from "@emotion/styled/macro";
import { css, keyframes } from "@emotion/react";

interface Props {
  width?: number;
  height?: number;
  circle?: boolean;
  rounded?: boolean;
  count?: number;
  unit?: string;
  animation?: boolean;
  color?: string;
  style?: React.CSSProperties;
}

const pulseKeyFrame = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`;

const pulseAnimation = css`
  animation: ${pulseKeyFrame} 1.5s ease-in-out infinite;
`;

const Base = styled.span<Props>`
  ${({ color }) => color && `background-color: ${color}`};
  ${({ rounded }) => rounded && `border-radius: 8px`};
  ${({ circle }) => circle && `border-radius: 50%`};
  ${({ width, height }) => (width || height) && "display: block"};
  ${({ animation }) => animation && pulseAnimation};
  width: ${({ width, unit }) => width && unit && `${width}${unit}`};
  height: ${({ height, unit }) => height && unit && `${height}${unit}`};
`;

const Content = styled.span`
  opacity: 0;
`;

function Skeleton(props: Props) {
  const content = useMemo(
    () => [...Array({ length: props.count })].map(() => "-").join(""),
    [props.count]
  );

  return (
    <Base
      style={props.style}
      rounded={props.rounded}
      circle={props.circle}
      width={props.width}
      height={props.height}
      animation={props.animation}
      unit={props.unit}
      color={props.color}
    >
      <Content>${content}</Content>
    </Base>
  );
}

export default Skeleton;
