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
        case actionTypes.CHANGE_SHAPE_BACKGROUND_DONE:
            if (action.shapeType == CIRCLE) {
                let shape_array = [...state.shape_array];
                let updatedItem = shape_array.find((shape, index) => { return index === action.index })
                updatedItem.fill = action.fill
                return {
                    ...state,
                    ...shape_array
                };
            } else
                return state
        case actionTypes.REMOVE_SHAPES:
            return {
                shape_array: []
            };
        default:
            return state
    }
};