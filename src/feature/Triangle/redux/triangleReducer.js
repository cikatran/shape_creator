import * as actionTypes from '../../../actionTypes';
import { TRIANGLE } from '../../../shapeTypes';

const initialState = {
    shape_array: [],
};

export default function triangleReducer(state = initialState, action) {

    switch (action.type) {
        case actionTypes.SPAWN_SHAPE_SUCCESS:
            if (action.shapeType == TRIANGLE)
                return {
                    ...state,
                    shape_array: [...state.shape_array, action.shape]
                };
                return state
        case actionTypes.REMOVE_SHAPES:
            return {
                shape_array: []
            };
        default:
            return state
    }
};