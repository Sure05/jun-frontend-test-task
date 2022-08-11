import {render, screen} from "@testing-library/react";
import React from "react";
import {HorseIconContainer, HorseName, LineContainer, StyledHorse, Track} from "./index";
import * as themes from "../../themes/schema.json";

const data = {
	name: 'Princess Diana',
	distance: 600
};
const index = 0;
const length = 6

describe('test line', () => {
	test('component rendered', () => {
		const theme = themes.data.dark
		render(
			<LineContainer theme={theme}>
				<Track theme={theme} index={index} length={length}>
					<HorseIconContainer theme={theme} distance={data.distance / 10}>
						<StyledHorse theme={theme}/>
					</HorseIconContainer>
				</Track>
				<HorseName theme={theme} index={index} length={length}>{data.name}</HorseName>
			</LineContainer>
		)
		
		expect(screen.getByText(data.name)).toBeTruthy();
	})
	
})
