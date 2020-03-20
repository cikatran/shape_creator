import * as actionTypes from './actionTypes'

export function generateRandomColor(color) {
  return {
    type: actionTypes.GENERATE_RANDOM_COLOR,
    color: color
  }
}

export function spawnShape(shapeType, x, y) {
  let fillType = '';
  switch (shapeType) {
    case 'square':
      fillType = 'patterns'
      break;
      
  }
  return {
    type: actionTypes.SPAWN_SHAPE,
    x,
    y,
    shapeType
  }
}