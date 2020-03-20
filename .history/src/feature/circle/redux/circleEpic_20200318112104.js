import { ofType } from "redux-observable";
import { LOAD_COLOR } from "../../../actionTypes";
import { loadColor } from "../../../api";
import { loadColorSuccess } from "./circleActions";

export const loadColorEpic = action$ => action$.pipe(
  ofType(LOAD_COLOR),
  mergeMap(action => from(loadColor()).pipe(
    map(response => loadColorSuccess(response)),
  ))
)

const