import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { randomColor } from './util/randomize';


const rootEpic = (action$, store$, dependencies) =>
  combineEpics(
    loadColorEpic,
    loadPatterEpic
  )(action$, store$, dependencies).pipe(
    timeout(1000),
    catchError((error, source) => {
      offscreenBuffering()
    })
  );

export const rootReducer = combineReducers({
  ping,
  users
});