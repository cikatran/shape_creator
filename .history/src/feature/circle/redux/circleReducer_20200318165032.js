import * as actionTypes from '../../../actionTypes';
import _ from 'lodash';
import {NativeModules} from 'react-native'

const initialState = {
    circle_array: null,
};

export default function circleReducer(state = initialState, action) {

    switch (action.type) {
        case actionTypes.FETCH_ARTICLE_DETAIL_SUCCESS:
            return {
                ...state,
                isFetching: false,
                fetched: true,
                data: action.data
            };
        case actionTypes.FETCH_ARTICLE_DETAIL_FAILURE:
            return {
                ...state,
                isFetching: false,
                fetched: true,
                error: true,
                errorMessage: action.errorMessage
            };
        default:
            return state
    }
};