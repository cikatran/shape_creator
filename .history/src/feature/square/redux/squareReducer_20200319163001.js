import * as actionTypes from '../../../actionTypes';
import { SQUARE } from '../../../shapeTypes';

const initialState = {
    square_array: [],
};

export default function squareReducer(state = initialState, action) {

    switch (action.type) {
        case actionTypes.SPAWN_SHAPE:
            if (action.shapeType == SQUARE)
                return {
                    ...state,
                    square_array: [...square_array, action.square]
                };
         break       
        case actionTypes.REMOVE_SHAPES:
            return {
                circle_array: []
            };
        default:
            return state
    }
};