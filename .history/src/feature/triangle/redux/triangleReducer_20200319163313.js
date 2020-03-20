import * as actionTypes from '../../../actionTypes';
import { CIRCLE } from '../../../shapeTypes';

const initialState = {
    shape_array: [],
};

export default function trianglReducer(state = initialState, action) {

    switch (action.type) {
        case actionTypes.SPAWN_SHAPE_SUCCESS:
            if (action.shapeType == CIRCLE)
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