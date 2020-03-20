import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { randomColor } from './util/randomize';
import { generateRandomColor } from './rootAction';


export const rootEpic = (action$, store$, dependencies) =>
  combineEpics(
    loadColorEpic,
    loadPatterEpic
  )(action$, store$, dependencies).pipe(
    timeout(1000),
    catchError(() => {
      let color = randomColor;
      
      return generateRandomColor(color);
    })
  );

export const rootReducer = combineReducers({
  ping,
  users
});