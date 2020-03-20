const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);
const maxShapeSize = Math.round(Dimensions.get('window').width*45/100);
const minShapeSize = Math.round(Dimensions.get('window').height*10/100);

export function randomSizeFromPoint(x, y) {
  let randomSize = Math.floor(Math.random() * (maxShapeSize - x * 45 / 100)) + (minShapeSize - y * 10 / 100);
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
  return randomSize;
}

export function randomColor() {
  let ColorCode = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
}