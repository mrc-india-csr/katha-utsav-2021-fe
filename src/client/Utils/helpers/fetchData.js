import config from '../../config'

const FetchData = async(method = 'POST', jsonData = {}, route = '') => {
  const { baseUrl } = config;
  const fetchOptions = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(jsonData)
  };

  return await fetch(baseUrl + route, fetchOptions).then((res) => {
    return res;
  }).catch(error => {
    return 'error';
  });
}

export default FetchData;