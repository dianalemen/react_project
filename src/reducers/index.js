import { combineReducers } from 'redux';
import messages from './messages';
import filterTracks from './filetr';

export default combineReducers({
    messages,
    filterTracks
})