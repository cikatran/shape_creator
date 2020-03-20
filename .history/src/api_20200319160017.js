
const BASE_URL = 'http://www.colourlovers.com/api';

export const loadFill = (type) => {
    let url = '';
    if (type == 'color')
        url = `${baseURL}/colors/random?format=json`
    else 
        url =     
  return fetch('http://www.colourlovers.com/api/patterns/random?format=json', {
      method: 'GET',
  }).then(response => {
      return response.json()
  }).then((responseJson) => {
      return responseJson;
  })
};