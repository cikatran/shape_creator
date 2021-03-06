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

export function spawnShapeDone(fillType, ) {

}