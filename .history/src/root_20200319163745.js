import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { randomColor } from './util/randomize';
import { generateRandomColor } from './rootAction';
import { spawnShapeEpic } from './redux/shapeEpic';
import circleReducer from './feature/Circle/redux/circleReducer'
import squareReducer from './feature/SQ/redux/circleReducer'
import circleReducer from './feature/Circle/redux/circleReducer'


export const rootEpic = (action$, store$, dependencies) =>
  combineEpics(
    spawnShapeEpic
  )(action$, store$, dependencies).pipe(
    timeout(1000),
    catchError(() => {
      let color = randomColor;
      //if cannot load Color or Pattern then return raendom color
      return generateRandomColor(color);
    })
  );

export const rootReducer = combineReducers({
  squareReducer,
  circleReducer,
  triangleReducer
});