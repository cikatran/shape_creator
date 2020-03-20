export const handleSpawnShapeEvent = (x, y, shape_array, shapeType) => {

    let randomSize = Math.floor(Math.random() * (maxShapeSize - x*45/100)) + (minShapeSize - y*10/100); 
    shape_array =  [...shape_array, {x: x, y: y, size: randomSize, shapeType }]
}