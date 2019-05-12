import ACTIONS from "./action";
import _ from 'lodash';
import song from './model';

const defaultState = {
	song: {
		gameTitle: 'I Love',
		trackNumber: 'Kaelan',
		songData: ''
	},
	status: ''
}

const reducer = (state = defaultState, action) => {
	switch(action.type) {
		case ACTIONS.Types.changeSong: {
			console.log(action);

			let newSong = action.payload;
			let newState = _.cloneDeep(state);
			newState.song = newSong;

			return newState;
		}

		default: {
			return state;
		}
	}
}

export default reducer;