import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { randomColor } from './util/randomize';
import { generateRandomColor } from './rootAction';
import { spawnShapeEpic } from './redux/shapeEpic';
import circleReducer from './feature/Circle/redux/circleReducer'
import squareReducer from './feature/Square/redux/squareReducer'
import triangleReducer from './feature/Triangle/redux/triangleReducer'
import allReducer from './feature/All/redux/allReducer'


export const rootEpic =combineEpics(
    spawnShapeEpic
  );

export const rootReducer = combineReducers({
  squareReducer,
  circleReducer,
  triangleReducer,
  allReducer
});
