import { ofType } from "redux-observable";
import { of } from 'rxjs';
import { mergeMap, map, catchError, timeout} from 'rxjs/operators';
import { SPAWN_SHAPE, CHANGE_SHAPE_BACKGROUND } from "./../actionTypes";
import { spawnShapeDone, changeShapeBackgroundDone } from "../redux/spawnShapeAction";
import { loadFill } from "../api";
import { randomColor } from "../util/randomize";


export const spawnShapeEpic = action$ => action$.pipe(
  ofType(SPAWN_SHAPE),
  mergeMap(action => loadFill(action.fillType).pipe(
    map(fill => spawnShapeDone(action.shapeType, action.x, action.y, fill[0])),
    timeout(10000),
    catchError(error => {
      let fill = randomColor();
      return of(spawnShapeDone(action.shapeType, action.x, action.y, fill))
    })
  ))
)

export const changeShapeBackgroundEpic = action$ => action$.pipe(
  ofType(CHANGE_SHAPE_BACKGROUND),
  mergeMap(action => loadFill(action.fillType).pipe(
    map(fill => changeShapeBackgroundDone(action.shapeType, fill[0], action.index)),
    timeout(4000),
    catchError(error => {
      let fill = randomColor();
      return of(changeShapeBackgroundDone(action.shapeType, fill, action.index))
    })
  ))
)