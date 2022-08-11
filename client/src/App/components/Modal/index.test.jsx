import {render, screen, fireEvent} from "@testing-library/react";
import Modal from "./index";

let show = true;

describe('Test Modal', () => {
	it('Modal renders', function () {
		const handleClose = jest.fn()
		render(
			<Modal show={show} onClose={handleClose}>
				<div>test</div>
			</Modal>
		)
		expect(screen.getByText('test')).toBeTruthy();
		
		fireEvent.click(screen.getByText(/×/i));
		expect(handleClose).toHaveBeenCalledTimes(1)
	});
})
