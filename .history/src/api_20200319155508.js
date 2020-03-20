export const loadColor = () => {
  return fetch('http://www.colourlovers.com/api/colors/random?format=json', {
      method: 'GET',
  }).then(response => {
      return response.json()
  }).then((responseJson) => {
      return responseJson;
  })
};

export const loadFill = (type) => {
    let url = '';
    
  return fetch('http://www.colourlovers.com/api/patterns/random?format=json', {
      method: 'GET',
  }).then(response => {
      return response.json()
  }).then((responseJson) => {
      return responseJson;
  })
};