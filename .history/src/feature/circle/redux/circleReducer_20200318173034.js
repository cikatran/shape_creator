import * as actionTypes from '../../../actionTypes';

const initialState = {
    circle_array: [],
};

export default function circleReducer(state = initialState, action) {

    switch (action.type) {
        case actionTypes.SPAWN_CIRCLE_SUCCESS:
            return {
                ...state,
                circle_array: [...circle_array, ]
            };
        case actionTypes.REMOVE_SHAPES:
            return {
                circle_array: []
            };
        default:
            return state
    }
};