
const baseURL = 'http://www.colourlovers.com/api';
const postFix = 'random?format=json'

export const loadFill = (type) => {
    let url = `${baseURL}/${type}/${postFix}`
    console.log
  return fetch(url, {
      method: 'GET',
  }).then(response => {
      return response.json()
  }).then((responseJson) => {
      return responseJson;
  })
};