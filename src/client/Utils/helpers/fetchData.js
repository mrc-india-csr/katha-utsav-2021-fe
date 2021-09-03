const FetchData = async(method = 'POST', jsonData = {}, route = '') => {
  const fetchOptions = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(jsonData)
  };

  return await fetch(`http://localhost:3002${route}`, fetchOptions).then((res) => {
    return res;
  }).catch(error => {
    console.log(error);
    return 'error';
  });
}

export default FetchData;