export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAILURE = 'SEARCH_FAILURE';

const actions = {
    
    searchRequest: () => {
        return {
            type: SEARCH_REQUEST
        }
    },
  
    searchResolved: (params, status) => {
        return {
            type: status === 'success' ? SEARCH_SUCCESS : SEARCH_FAILURE,
            value: {
                response: params,
                status
            }
        }
    }
};

export default actions;