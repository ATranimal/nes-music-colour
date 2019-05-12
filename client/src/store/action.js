import song from "./model";

const Types = {
	CHANGE_SONG: "CHANGE SONG"
};

const changeSong = songData => ({
	type: Types.CHANGE_SONG,
	payload: songData
});

export default {
	Types,
	changeSong
}