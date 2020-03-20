import * as actionTypes from '../../../actionTypes';

const initialState = {
    square_array: [],
};

export default function squareReducer(state = initialState, action) {

    switch (action.type) {
        case actionTypes.SPAWN_SHAPE:
            if (action.shapeType ==)
            return {
                ...state,
                square_array: [...square_array, action.square]
            };
        case actionTypes.REMOVE_SHAPES:
            return {
                circle_array: []
            };
        default:
            return state
    }
};