import * as actionTypes from '../actionTypes'
import { randomSizeFromPoint, randomShape } from '../util/randomize';
import { SQUARE, RANDOM } from '../shapeTypes';
import * as fillTypes from '../fillTypes';

export function spawnShape(shapeType, x, y) {
  let randomShapeType = null
  if (shapeType == RANDOM) {
    randomShapeType = randomShape()
  }
  return {
    type: actionTypes.SPAWN_SHAPE,
    x,
    y,
    shapeType,
    fillType: getFillType(shapeType, randomShapeType),
    randomShapeType
  }
}

export function spawnShapeDone(shapeType, x, y, fill, randomShapeType) {
  let randomSize = randomSizeFromPoint(x, y)
  return {
    type: actionTypes.SPAWN_SHAPE_SUCCESS,
    shapeType,
    shape: { shapeType, x, y, size: randomSize, fill: getFillShape(fill, shapeType, randomShapeType) },
    randomShapeType
  }
}


export function changeShapeBackground(shapeType, index, randomShapeType) {

  return {
    type: actionTypes.CHANGE_SHAPE_BACKGROUND,
    index,
    fillType: getFillType(shapeType, randomShapeType),
    shapeType,
    randomShapeType
  }
}

export function changeShapeBackgroundDone(shapeType, fill, index, randomShapeType) {

  return {
    type: actionTypes.CHANGE_SHAPE_BACKGROUND_DONE,
    shapeType,
    index,
    fill: getFillShape(fill, shapeType, randomShapeType)
  }
}

export function removeAllShape(shapeType) {
  return {
    type: actionTypes.REMOVE_SHAPES,
    shapeType
  }
}

function getFillShape(fill, shapeType, randomShapeType) {
  let type = randomShapeType == null ? shapeType : randomShapeType
  if (typeof fill == 'string') {
    return fill;
  } else {
    return (type == SQUARE) ? fill.imageUrl : `#${fill.hex}`
  }
}

function getFillType(shapeType, randomShapeType) {
  let type = randomShapeType == null ? shapeType : randomShapeType
  switch (type) {
    case SQUARE:
      return fillTypes.FILL_PATTERNS
    default:
      return fillTypes.FILL_COLORS
  }
}