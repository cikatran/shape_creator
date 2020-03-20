import * as actionTypes from './../../../actionTypes'

export function loadColor() {
  return {
    type: actionTypes.LOAD_COLOR,
    data: data,
  }
}

export function loadColorSuccess(data) {
  return {
    type: actionTypes.LOAD_COLOR_SUCCESS,
    data: data,
  }
}