import { configureStore } from '@reduxjs/toolkit'
import CheckIn from "./redux/Slice/CheckIn";

export const store = configureStore({
	reducer: {
		checkIn: CheckIn
	},
})
