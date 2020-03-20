import * as actionTypes from '../actionTypes'
import { randomSizeFromPoint } from '../util/randomize';
import { SQUARE } from '../shapeTypes';
import { SQUARE } from '../shapeTypes';

export function spawnShape(shapeType, x, y) {
  let fillType = '';
  switch (shapeType) {
    case SQUARE:
      fillType = FILL_PATTERNS
      break
    default:
      fillType = 'colors'
      break  
  }
  return {
    type: actionTypes.SPAWN_SHAPE,
    x,
    y,
    shapeType,
    fillType
  }
}

export function spawnShapeDone(shapeType, x, y, fill) {
  let randomSize = randomSizeFromPoint(x, y)
  return {
    type: actionTypes.SPAWN_SHAPE_SUCCESS,
    shape: {shapeType, x, y, size: randomSize, fill}
  }
}