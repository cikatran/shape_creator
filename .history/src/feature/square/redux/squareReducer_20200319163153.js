import * as actionTypes from '../../../actionTypes';
import { SQUARE } from '../../../shapeTypes';

const initialState = {
    shape_array: [],
};

export default function squareReducer(state = initialState, action) {

    switch (action.type) {
        case actionTypes.SPAWN_SHAPE_SUCCESS:
            if (action.shapeType == SQUARE)
                return {
                    ...state,
                    square_array: [...square_array, action.shape]
                };
            break
        case actionTypes.REMOVE_SHAPES:
            return {
                shape_array: []
            };
        default:
            return state
    }
};