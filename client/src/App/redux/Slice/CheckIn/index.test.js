import {store} from "../../../store";
import {resetState, updateState} from "./index";

const testPayload = [
	{
		name: 'Princess Diana',
		distance: 0
	},
	{
		name: 'Cricket',
		distance: 0
	},
	{
		name: 'Rebel',
		distance: 0
	},
	{
		name: 'Lucy',
		distance: 0
	},
	{
		name: 'Lacey',
		distance: 0
	},
	{
		name: 'Ginger',
		distance: 0
	},
];

describe('Test CheckIn slice', () => {
	test('updateState', () => {
		let state = store.getState().checkIn;
		store.dispatch(updateState(testPayload));
		state = store.getState().checkIn;
		expect(state.active).toBeTruthy();
		expect(state.list.length).toBe(6);
		expect(state.data.length).toBe(6);
	})
	test('updateState', () => {
		store.dispatch(updateState(testPayload));
		store.dispatch(resetState());
		
		let state = store.getState().checkIn;
		console.log(state)
		expect(state.active).toBeFalsy();
		expect(state.list).toEqual([]);
		expect(state.data).toEqual([]);
		expect(state.finished).toEqual([]);
		expect(state.startTime).toBeNull();
	})
})
