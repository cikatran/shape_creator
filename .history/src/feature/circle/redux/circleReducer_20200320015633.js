import * as actionTypes from '../../../actionTypes';
import { CIRCLE } from '../../../shapeTypes';

const initialState = {
    shape_array: [],
};

export default function circleReducer(state = initialState, action) {

    switch (action.type) {
        case actionTypes.SPAWN_SHAPE_SUCCESS:
            if (action.shapeType == CIRCLE)
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