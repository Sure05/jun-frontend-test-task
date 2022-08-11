import React from "react";
import {useSelector} from "react-redux";
import {useTransition, animated} from "react-spring";
import styled from "styled-components";
import Line from "./Line";

const Container = styled.div`
  padding: 15px;
`

const TrackContainer = styled.div`
  padding-bottom: 25px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const height = 20;

const Info = () => {
	const {data, list, finished} = useSelector(state => state.checkIn);
	const transitions = useTransition(
		[...finished, ...data].map((data, i) => ({...data, y: i * height})),
		// (d) => d.name,
		{
			from: {position: "absolute", opacity: 0},
			leave: {height: 0, opacity: 0},
			enter: ({y}) => ({y, opacity: 1}),
			update: ({y}) => ({y}),
			key: (item) => item?.name
		}
	);
	
	
	return (
		<Container>
			<TrackContainer>
				{list.map((el, index) => <Line length={list.length} index={index} distance={el.distance / 10} key={`line-${index}`} data={el}/>)}
			</TrackContainer>
			{transitions(({y, ...rest}, item, {key}) => (
				<animated.div
					key={key}
					className="card"
					style={{
						transform: y.to((y) => `translate3d(0,${y}px,0)`),
						...rest
					}}
				>
					<div>{item.position && `${item.position}.`} {item.name}{item.time && `: Time - ${item.time/1000}s`}</div>
				</animated.div>
			))}
		</Container>
	)
}

export default Info
