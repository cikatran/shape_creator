import * as actionTypes from '../../../actionTypes';

const initialState = {
    circle_array: [],
};

export default function squareReducer(state = initialState, action) {

    switch (action.type) {
        case actionTypes.SPAWN_CIRCLE_SUCCESS:
            return {
                ...state,
                circle_array: [...circle_array, action.circle]
            };
        case actionTypes.REMOVE_SHAPES:
            return {
                circle_array: []
            };
        default:
            return state
    }
};