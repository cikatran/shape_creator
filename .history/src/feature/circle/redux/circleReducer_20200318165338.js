import * as actionTypes from '../../../actionTypes';

const initialState = {
    circle_array: [],
};

export default function circleReducer(state = initialState, action) {

    switch (action.type) {
        case actionTypes.FETCH_ARTICLE_DETAIL_SUCCESS:
            return {
                ...state,
                isFetching: false,
                fetched: true,
                data: action.data
            };
        case actionTypes.FETCH_ARTICLE_DETAIL_FAILURE:
            return {
                ...state,
                isFetching: false,
                fetched: true,
                error: true,
                errorMessage: action.errorMessage
            };
        default:
            return state
    }
};