export const getUrlInfo = (url) => {
  return fetch('https://w4gpgbc6mb.execute-api.ap-southeast-1.amazonaws.com/production/v1/metadata/extract?url=' + url, {
      method: 'GET',
  }).then(response => {
      return response.json()
  }).then((responseJson) => {
      return responseJson;
  })
};