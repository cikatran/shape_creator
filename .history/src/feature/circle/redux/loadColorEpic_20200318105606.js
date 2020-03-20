import { ofType } from "redux-observable";
import { LOAD_COLOR } from "../../../actionTypes";

const loadColorEpic = action$ => action$.pipe(
  ofType(LOAD_COLOR),
  mergeMap(action )
)