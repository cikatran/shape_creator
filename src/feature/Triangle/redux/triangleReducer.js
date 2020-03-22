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

        case actionTypes.CHANGE_SHAPE_BACKGROUND_DONE:
            if (action.shapeType == TRIANGLE) {
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