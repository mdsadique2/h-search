import {combineReducers} from 'redux';

import SearchReducer from 'Pages/Search/reducer'

const reducer = combineReducers({
    searchState: SearchReducer,
});

export default reducer;