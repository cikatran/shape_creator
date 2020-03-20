import * as actionTypes from '../actionTypes'
import { randomSizeFromPoint } from '../util/randomize';
import { SQUARE } from '../shapeTypes';
import * as fillTypes from '../fillTypes';

export function spawnShape(shapeType, x, y) {
  let fillType = '';
  switch (shapeType) {
    case SQUARE:
      fillType = fillTypes.FILL_PATTERNS
      break
    default:
      fillType = fillTypes.FILL_COLORS
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
    shape: {shapeType, x, y, size: randomSize, (shapeType == SQUARE) ? fill.imageUrl : `#${fill.hex}`}
  }
}