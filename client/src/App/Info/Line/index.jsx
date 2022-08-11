import React from 'react';
import {ReactComponent as HorseIcon} from './horse.svg';
import styled from "styled-components";

export const LineContainer = styled.div`
	display: flex;
`
export const HorseName = styled.div`
  border: 1px solid ${props => props.theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  max-width: 150px;
  ${props => {
    if(props.index === 0) return 'border-top-right-radius: 5px'
    if(props.index + 1 === props.length) return 'border-bottom-right-radius: 5px'
  }}
`

export const Track = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  border: 1px solid ${props => props.theme.colors.text};
  ${props => {
	  if(props.index === 0) return 'border-top-left-radius: 5px'
	  if(props.index + 1 === props.length) return 'border-bottom-left-radius: 5px'
  }}
`;

export const HorseIconContainer = styled.div`
  transform: translateX(${props => props.distance}%) translateX(-40px);
  transition: all 1s;
  display: flex;
  justify-content: start;
  height: 75px;
`;

export const StyledHorse = styled(HorseIcon)`
  position: relative;
  top: 0;
  left: 0;
  width: 40px;
  transform: scale(-1, 1);

  & path {
    fill: ${props => props.theme.colors.text}
  }
;
`

const Line = ({data, index, length}) => {
	return (
		<LineContainer>
			<Track index={index} length={length}>
				<HorseIconContainer distance={data.distance / 10}>
					<StyledHorse/>
				</HorseIconContainer>
			</Track>
			<HorseName index={index} length={length}>{data.name}</HorseName>
		</LineContainer>
	)
}

export default Line;
