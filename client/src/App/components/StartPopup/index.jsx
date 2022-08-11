import React from 'react';
import Modal from "../Modal";
import styled from "styled-components";

export const BackShed = styled.div`
  background-color: rgba(48, 49, 48, 0.65);
  height: 100%;
  position: fixed;
  transition: all 1.3s;
  width: 100%;
  z-index: 5;
`;

const StartPopup = ({isOpen, onClose}) => {
	if (!isOpen) return null
	return (
		<BackShed onClick={onClose}>
			<Modal onClose={onClose} show={isOpen}>
				<p>
					The history of horse racing, it seems, as old as the history of the world. A very impressive and
					dangerous were the race on a Roman chariot, which attracted hundreds of cheering spectators in the
					amphitheaters. The best were Roman heroes, who enjoyed the status of celebrities in those days. The
					ancient Romans admired horses so much that even cut their gigantic figures on the hills South of
					England.
				</p>
				<p>
					For centuries, the Arabian Peninsula was the scene of energetic shows, on which the ancient Arabian
					horses, purebred and the oldest breed of horses in the world, overcome tremendous distance in the
					deserts of the Peninsula. In the 17 th and 18-th Arab stallions were imported to Britain, where they
					interbred with the English hacks, so it appeared the English breed of purebred horses, which is a
					synonym of the race.
					That horse racing mean for the British difficult to describe in words. Accepted but the truth that
					sports betting started from horse racing, which became a professional sport in the beginning of the
					18th century for the government of the English Queen Anne. In our time the races play a huge role in
					the British social life and culture.
				</p>
				<button onClick={onClose}>Start rate</button>
			</Modal>
		</BackShed>
	)
}

export default StartPopup
