const { createSlice } = require('@reduxjs/toolkit')
const { cakeActions } = require('../cake/cakeSlice')

const initialState = {
	numOfIceCreams: 20,
}

const iceCreamSlice = createSlice({
	name: 'iceCream',
	initialState,
	reducers: {
		ordered: (state) => {
			state.numOfIceCreams--
		},
		restocked: (state, action) => {
			state.numOfIceCreams += action.payload
		},
	},
	// extraReducers: {
	// 	// when the shop has a sale in which everyone gets an ice cream when ordering a cake
	// 	['cake/ordered']: (state) => {
	// 		state.numOfIceCreams--
	// 	},
	// },
	// same as above
	extraReducers: (builder) => {
		builder.addCase(cakeActions.ordered, (state) => {
			state.numOfIceCreams--
		})
	},
})

module.exports = iceCreamSlice.reducer
module.exports.iceCreamActions = iceCreamSlice.actions
