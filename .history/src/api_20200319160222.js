
const baseURL = 'http://www.colourlovers.com/api';
const postFix = ''

export const loadFill = (type) => {
    let url = '';
    if (type == 'color')
        url = `${baseURL}/colors/random?format=json`
    else 
        url = `${baseURL}/patterns/random?format=json`    
  return fetch(url, {
      method: 'GET',
  }).then(response => {
      return response.json()
  }).then((responseJson) => {
      return responseJson;
  })
};