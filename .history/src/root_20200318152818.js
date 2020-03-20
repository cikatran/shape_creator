import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { randomColor } from './util/randomize';
import { generateRandomColor } from './rootAction';


const rootEpic = (action$, store$, dependencies) =>
  combineEpics(
    loadColorEpic,
    loadPatterEpic
  )(action$, store$, dependencies).pipe(
    timeout(1000),
    catchError((error, source) => {
      let color = randomColor;
      return generateRandomColor
    })
  );

export const rootReducer = combineReducers({
  ping,
  users
});