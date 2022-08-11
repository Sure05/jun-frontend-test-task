import socketIOClient from 'socket.io-client';
import React from "react";

jest.mock('socket.io-client');

describe("Testing connection", () => {
	let socket;
	beforeEach(() => {
		socket = socketIOClient('http://localhost:3002');
	});
	afterEach(() => {
		jest.restoreAllMocks();
	});
	
	it('should dispatch connect event', () => {
		expect(socketIOClient.connect).toHaveBeenCalled();
	});
})
