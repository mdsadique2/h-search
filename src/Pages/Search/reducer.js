import globalState from 'Store/globalState';
import utils from 'Utilities/Utils';
import { 
  SEARCH_REQUEST, 
  SEARCH_SUCCESS, 
  SEARCH_FAILURE} from './actionCreators';

// reducer when message is fetched from api
let updateSearchData = (state, action) => {
  let {response} = action.value;
  let newState = {...state}

  let hits = utils.sortObjectArray(response.hits, 'relevancy_score'); //sorted as per score
  let max = hits.length > 10 ? 10 : hits.length; // if length greter than 10 then take 10 else length of array
  let hits10 = hits.slice(0, max); // subarray created
  newState.searchResult = hits10;
  newState.searchLoading = false;
  newState.apiError = false;
  return newState;
}

let request = (state, action) => {
  return {...state, searchLoading: true, apiError: false};
}


export default function SearchReducer(state = globalState.searchState, action) {
  switch (action.type) {
    
    case SEARCH_REQUEST:
      return request();
      // return {...state, searchLoading: true, apiError: false};
    case SEARCH_SUCCESS:
      return updateSearchData(state, action);
    case SEARCH_FAILURE:
      return {...state, searchLoading: false, apiError: true};
    default:
      return state;
  }
}
