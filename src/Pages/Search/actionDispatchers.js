import Api from 'Utilities/ApiLayer';
import {ApiUrls} from 'Utilities/ApiUrls';
import actions from './actionCreators'

const actionDispatchers = (dispatch) => {

    let actionsObj = {
        // event dispatcher for fetching api data
        searchQuery: (query) => {
            dispatch(actions.searchRequest());
            let payload = {
                query
            }
            return Api.get(ApiUrls.search, {
                params: payload
            }).then( (response) => {
                dispatch(actions.searchResolved(response, 'success'));
            }, (error) => {
                dispatch(actions.searchResolved(error, 'failure'));
                return Promise.reject(error);
            })
        },
    }
    return actionsObj;
}

export default actionDispatchers;