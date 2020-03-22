import { ofType } from "redux-observable";
import { of } from 'rxjs';
import { mergeMap, map, catchError, timeout} from 'rxjs/operators';
import { SPAWN_SHAPE, CHANGE_SHAPE_BACKGROUND } from "./../actionTypes";
import { spawnShapeDone, changeShapeBackgroundDone } from "../redux/spawnShapeAction";
import { loadFill } from "../api";
import { randomColor } from "../util/randomize";
import { SQUARE } from "../shapeTypes";
import { FILL_PATTERNS, FILL_COLORS } from "../fillTypes";


export const spawnShapeEpic = action$ => action$.pipe(
  ofType(SPAWN_SHAPE),
  mergeMap(action => loadFillHelper(action).pipe(
    map(fill => spawnShapeDone(action.shapeType, action.x, action.y, fill[0], action.randomShapeType)),
    timeout(3000),
    catchError(error => {
      let fill = randomColor();
      return of(spawnShapeDone(action.shapeType, action.x, action.y, fill))
    })
  ))
)

const  loadFillHelper = (action) => {
  if (action.randomShapeType == null) {
    return loadFill(action.fillType)
  } else {
    let fillType = action.randomShapeType == SQUARE ? FILL_PATTERNS : FILL_COLORS
    return loadFill(fillType)
  }
}

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