import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  background: white;
  border: 1px solid #d0cccc;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.17);
  margin: 100px auto 0;
  transition: all .8s;
  width: 60%;
  border-radius: 10px;
  color: #000000;
  transform: ${props => props.show ? 'translateY(0vh)' : 'translateY(-100vh)}'};
  opacity: ${props => props.show ? '1' : '0'}
`;

const CloseButton = styled.span`
  cursor: pointer;
  float: right;
  font-size: 30px;
  margin: 0;
  padding-right: 5px;
`

const Body = styled.div`
  padding: 10px 15px;
  text-align: center;
`;

const Modal = ({show= false, onClose, children}) => {
	return (
		<div>
			<Wrapper show={show}>
			<div className="modal-header">
				<CloseButton onClick={onClose}>×</CloseButton>
			</div>
			<Body className="modal-body">
				{children}
			</Body>
		</Wrapper>
</div>
)
}

export default Modal
