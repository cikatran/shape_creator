import { ofType } from "redux-observable";
import { LOAD_COLOR, SPAWN_SHAPE } from "./../actionTypes";
import { loadColor } from "../../../api";
import { loadColorSuccess, spawnCircle } from "./circleAction";
import { spawnShape, spawnShapeDone } from "../redux/spawnShapeAction";
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
    map(response => spawnShapeDone(action.shape))
  ))
)