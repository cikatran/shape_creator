import * as actionTypes from '../actionTypes'
import { randomSizeFromPoint } from '../util/randomize';
import { SQUARE } from '../shapeTypes';
import * as fillTypes from '../fillTypes';

export function spawnShape(shapeType, x, y) {
  return {
    type: actionTypes.SPAWN_SHAPE,
    x,
    y,
    shapeType,
    fillType: getFillType(shapeType)
  }
}

export function spawnShapeDone(shapeType, x, y, fill) {
  let randomSize = randomSizeFromPoint(x, y)


  return {
    type: actionTypes.SPAWN_SHAPE_SUCCESS,
    shapeType,
    shape: { shapeType, x, y, size: randomSize, fill: getFillShape(fill, shapeType) }
  }
}


export function changeShapeBackground(shapeType, index) {

  return {
    type: actionTypes.CHANGE_SHAPE_BACKGROUND,
    index,
    fillType: getFillType(shapeType),
    shapeType
  }
}

export function changeShapeBackgroundDone(shapeType, fill, index) {
  console.log(shapeType)
  return {
    type: actionTypes.CHANGE_SHAPE_BACKGROUND_DONE,
    shapeType,
    index,
    fill: getFillShape(fill, shapeType)
  }
}

function getFillShape(fill, shapeType) {
  if (typeof fill == 'string') {
    return fill;
  } else {
    return (shapeType == SQUARE) ? fill.imageUrl : `#${fill.hex}`
  }
}

function getFillType(shapeType) {
  switch (shapeType) {
    case SQUARE:
      return fillTypes.FILL_PATTERNS
    default:
      return fillTypes.FILL_COLORS
  }
}