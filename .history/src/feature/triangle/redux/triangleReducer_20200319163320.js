import * as actionTypes from '../../../actionTypes';
import { CIRCLE, TRIANGLE } from '../../../shapeTypes';

const initialState = {
    shape_array: [],
};

export default function triangleReducer(state = initialState, action) {

    switch (action.type) {
        case actionTypes.SPAWN_SHAPE_SUCCESS:
            if (action.shapeType == TRIANGLE)
                return {
                    ...state,
                    shape_array: [...shape_array, action.shape]
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