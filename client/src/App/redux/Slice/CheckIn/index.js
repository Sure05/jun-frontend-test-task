import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	list: [],
	data: [],
	finished: [],
	startTime: null,
	active: false
};

const CheckIn = createSlice({
	name: 'CheckIn',
	initialState,
	reducers: {
		updateState: (state, {payload}) => {
			if(state.data.length === 0) state.startTime = Date.now();
			state.list = payload
			const finished = [...payload].filter(el => {
				return el.distance === 1000
			});

			state.data = [...payload]
				.sort((a, b) => b.distance - a.distance)
				.map((a) => {
					if(!state.finished.find(el => el.name === a.name) && a.distance === 1000){
						state.finished.push({
							...a,
							time: Date.now() - state.startTime,
							position: state.finished.length + 1
						})
					}
					return {...a}
				})
				.filter(a => a.distance !== 1000)
			state.active = finished.length !== payload.length;
			
		},
		resetState: (state) => {
			state.startTime = null;
			state.data = [];
			state.finished = [];
			state.list = [];
			state.active = false;
		}
	}
})

export const {updateState, resetState} = CheckIn.actions

export default CheckIn.reducer
