import * as actionTypes from '../actionTypes'
import { randomSizeFromPoint } from '../util/randomize';

export function spawnShape(shapeType, x, y) {
  let fillType = '';
  switch (shapeType) {
    case 'square':
      fillType = 'patterns'
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

export function spawnShapeDone(fill, x, y, ) {
  let randomSize = randomSizeFromPoint(x, y)
  return {
    type: actionTypes.SPAWN_SHAPE_SUCCESS,
    shape: {shapeType, x, y, size: randomSize, fill}
  }
}