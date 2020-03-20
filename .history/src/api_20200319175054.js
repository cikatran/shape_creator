
import { ajax } from 'rxjs/ajax';

const baseURL = 'http://www.colourlovers.com/api';
const postFix = 'random?format=json'

export const loadFill = (type) => {
    let url = `${baseURL}/${type}/${postFix}`
    console.log(`Load fill: ${url}`)
  return fetch(url, {
      method: 'GET',
  })
};