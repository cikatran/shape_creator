export const handleSpawnShapeEvent = (x, y, shape_array) => {

    let randomSize = Math.floor(Math.random() * (maxShapeSize - x*45/100)) + (minShapeSize - y*10/100);
    //Make sure shape appear in appreciate position
    //=======BEGIN============//
    if (x - randomSize < 0) 
      randomSize = x;
    if (randomSize + x > screenWidth)
      randomSize = screenWidth - x  
    if (y - randomSize < 0)
      randomSize = y
    if (y + randomSize > screenHeight)
      randomSize = screenHeight - y  
    //========END=============//  
   
    shape_array =  [...shape_array, {x: x, y: y, size: randomSize }]

}