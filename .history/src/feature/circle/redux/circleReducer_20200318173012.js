import * as actionTypes from '../../../actionTypes';

const initialState = {
    circle_array: [],
};

export default function circleReducer(state = initialState, action) {

    switch (action.type) {
        case actionTypes.SPAWN_CIRCLE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                fetched: true,
                data: action.data
            };
        case actionTypes.REMOVE_SHAPES:
            return {
                circle_array: []
            };
        default:
            return state
    }
};