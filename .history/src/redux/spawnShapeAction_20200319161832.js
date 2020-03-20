import * as actionTypes from '../actionTypes'

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

export function spawnShapeDone(fill, x, y, shapeType) {
  let randomSize = rand(x, y)
  return {
    type: actionTypes.SPAWN_SHAPE_SUCCESS,
    shape: {shapeType, x, y, size, fill}
  }
}