import { SET_THEME } from "./Constants";

const theme = (state = { darkMode:false }, action) => {
	switch (action.type) {
		case SET_THEME:
			return action.theme;
		default:
			return state;
	}
};

export default {
    theme
}