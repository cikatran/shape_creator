export function randomSizeFromPoint(x, y) {
  let randomSize = Math.floor(Math.random() * (maxShapeSize - x * 45 / 100)) + (minShapeSize - y * 10 / 100);
  //Make sure shape appear in appreciate position
  //=======BEGIN============//
  if (x - randomSize < 0)
    randomSize = x;
  if (randomSize + x > screenWidth)
    randomSize = screenWidth - x
  //========END=============//  
}