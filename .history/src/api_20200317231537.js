export const loadColor = (url) => {
  return fetch('http://www.colourlovers.com/api/colors/random?format=json', {
      method: 'GET',
  }).then(response => {
      return response.json()
  }).then((responseJson) => {
      return responseJson;
  })
};

export const loadC = (url) => {
  return fetch('http://www.colourlovers.com/api/colors/random?format=json', {
      method: 'GET',
  }).then(response => {
      return response.json()
  }).then((responseJson) => {
      return responseJson;
  })
};