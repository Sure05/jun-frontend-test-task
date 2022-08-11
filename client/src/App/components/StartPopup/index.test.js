import {render, screen} from "@testing-library/react";
import {BackShed} from "./index";
import Modal from "../Modal";

let isOpen = true;

describe('Test Modal container', () => {
	it('Modal renders', function () {
		const handleClose = jest.fn()
		render(
			<BackShed onClick={handleClose}>
				<Modal onClose={handleClose} show={isOpen}>
					<div>test</div>
				</Modal>
			</BackShed>
		)
		expect(screen.getByText('test')).toBeTruthy();
	});
})
