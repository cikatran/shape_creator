import * as actionTypes from '../../../actionTypes';
import { RANDOM } from '../../../shapeTypes';
import { randomShape } from '../../../util/randomize';

const initialState = {
    shape_array: [],
};

export default function allReducer(state = initialState, action) {

    switch (action.type) {
        case actionTypes.SPAWN_SHAPE_SUCCESS:
            if (action.shapeType == RANDOM) {
                action.shape.shapeType = randomShape();
                return {
                    ...state,
                    shape_array: [...state.shape_array, action.shape]
                };
            }
            return state
        case actionTypes.REMOVE_SHAPES:
            return {
                shape_array: []
            };
        default:
            return state
    }
};