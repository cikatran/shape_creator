import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { randomColor } from './util/randomize';
import { generateRandomColor } from './rootAction';
import { spawnShapeEpic } from './redux/shapeEpic';
import circleReducer from './feature/Circle/redux/circleReducer'
import squareReducer from './feature/Square/redux/squareReducer'
import triangleReducer from './feature/Triangle/redux/triangleReducer'


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

export const initReducer = combineReducers({
  squareReducer,
  circleReducer,
  triangleReducer
});

export const rootReducer = (state, action) => {
 
  return initReducer(state, action)
}