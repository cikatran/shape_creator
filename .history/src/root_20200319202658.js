import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { randomColor } from './util/randomize';
import { generateRandomColor } from './rootAction';
import { spawnShapeEpic } from './redux/shapeEpic';
import circleReducer from './feature/Circle/redux/circleReducer'
import squareReducer from './feature/Square/redux/squareReducer'
import triangleReducer from './feature/Triangle/redux/triangleReducer'
import { catchError, timeout} from 'rxjs/operators';


export const rootEpic = (action$, store$, dependencies) =>
  combineEpics(
    spawnShapeEpic
  )(action$, store$, dependencies).pipe(
    catchError((error, source) => {
      console.error(error);
      return source;
    })
  );

export const rootReducer = combineReducers({
  squareReducer,
  circleReducer,
  triangleReducer
});
