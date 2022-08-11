import {render} from "@testing-library/react";
import React from "react";
import {Ball, Input, Label, Moon, Sun} from "./index";

describe('test SwitchThemeButton', () => {
	const changeTheme = jest.fn();
	it('should rendered', function () {
		render(
			<>
				<Input type="checkbox" id={"checkbox"} onChange={changeTheme}/>
				<Label htmlFor="checkbox" className="label">
					<Moon/>
					<Sun/>
					<Ball/>
				</Label>
			</>
		)
	});
	
})
