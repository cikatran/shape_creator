
const baseURL = 'http://www.colourlovers.com/api';
const postFix = 'random?format=json'

export const loadFill = (type) => {
    let url = ${baseURL}/colors/${postFix}`
    else 
        url = `${baseURL}/patterns/${postFix}`    
  return fetch(url, {
      method: 'GET',
  }).then(response => {
      return response.json()
  }).then((responseJson) => {
      return responseJson;
  })
};