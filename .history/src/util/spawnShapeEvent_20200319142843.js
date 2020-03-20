import { randomSizeFromPoint } from "./randomize"

export const handleSpawnShapeEvent = (x, y, shape_array, shapeType, color, pattern) => {
    let randomSize = randomSizeFromPoint(x, y) 
    shape_array =  [...shape_array, {x: x, y: y, size: randomSize, shapeType, color:  }]
}