import { ofType } from "redux-observable";
import { SPAWN_SHAPE } from "./../actionTypes";
import { spawnShapeDone } from "../redux/spawnShapeAction";
import { loadFill } from "../api";

export const loadColorEpic = action$ => action$.pipe(
  ofType(LOAD_COLOR),
  mergeMap(action => from(loadColor()).pipe(
    map(response => loadColorSuccess(response)),
  ))
)

export const spawnShapeEpic = action$ => action$.pipe(
  ofType(SPAWN_SHAPE),
  mergeMap(action => from(loadFill(action.fillType)).pipe(
    map(fill => spawnShapeDone(action.shapeType, action.x, action.y, fill))
  ))
)