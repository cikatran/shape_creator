import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';


const rootEpic = (action$, store$, dependencies) =>
  combineEpics(
    loadColorEpic,
    loadPatterEpic
  )(action$, store$, dependencies).pipe(
    timeout(1000),
    catchError((error, source) => {
      
    })
  );

export const rootReducer = combineReducers({
  ping,
  users
});