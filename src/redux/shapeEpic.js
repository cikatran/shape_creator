import { ofType } from "redux-observable";
import { of } from 'rxjs';
import { mergeMap, map, catchError, timeout} from 'rxjs/operators';
import { SPAWN_SHAPE } from "./../actionTypes";
import { spawnShapeDone } from "../redux/spawnShapeAction";
import { loadFill } from "../api";
import { randomColor } from "../util/randomize";


export const spawnShapeEpic = action$ => action$.pipe(
  ofType(SPAWN_SHAPE),
  mergeMap(action => loadFill(action.fillType).pipe(
    map(fill => spawnShapeDone(action.shapeType, action.x, action.y, fill[0])),
    timeout(2000),
    catchError(error => {
      let fill = randomColor();
      return of(spawnShapeDone(action.shapeType, action.x, action.y, fill))
    })
  ))
)