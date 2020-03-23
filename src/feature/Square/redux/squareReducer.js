import * as actionTypes from '../../../actionTypes';
import { SQUARE } from '../../../shapeTypes';

const initialState = {
    shape_array: [],
};

export default function squareReducer(state = initialState, action) {

    switch (action.type) {
        case actionTypes.SPAWN_SHAPE_SUCCESS:
            if (action.shapeType == SQUARE) {
                return {
                    ...state,
                    shape_array: [...state.shape_array, action.shape]
                };
            } else
                return state

        case actionTypes.CHANGE_SHAPE_BACKGROUND_DONE:
            if (action.shapeType == SQUARE) {
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
            if (action.shapeType == SQUARE) {
                return {
                    shape_array: []
                };
            } else
                return state
        default:
            return state
    }
};