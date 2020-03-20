import { ofType } from "redux-observable";
import { mergeMap, catchError, map} from 'rxjs/operators';
import { SPAWN_SHAPE } from "./../actionTypes";
import { spawnShapeDone } from "../redux/spawnShapeAction";
import { loadFill } from "../api";


export const spawnShapeEpic = action$ => action$.pipe(
  ofType(SPAWN_SHAPE),
  mergeMap(action => from(loadFill(action.fillType)).pipe(
    map(fill => spawnShapeDone(action.shapeType, action.x, action.y, fill))
  ))
)