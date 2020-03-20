import * as actionTypes from '../../../actionTypes';

const initialState = {
    square_array: [],
};

export default function squareReducer(state = initialState, action) {

    switch (action.type) {
        case actionTypes.SPAWN_CIRCLE_SUCCESS:
            return {
                ...state,
                square_array: [...square_array, action.circle]
            };
        case actionTypes.REMOVE_SHAPES:
            return {
                circle_array: []
            };
        default:
            return state
    }
};