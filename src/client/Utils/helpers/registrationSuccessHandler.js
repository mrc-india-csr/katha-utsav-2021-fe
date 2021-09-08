import FetchData from "./fetchData";

const RegistrationSuccessHandler = async (jsonData = {}, callback, orderId) => {
  const registrationResponse = await FetchData('POST', jsonData, '/katha_utsav/v1/register/complete_registration');

  if(registrationResponse === 'error') {
    callback('failed', 'Something went wrong, Try Again', orderId);
    return;
  }

  let registrationData = await registrationResponse.json();
  if(registrationResponse.status !== 200) {
    if (registrationResponse.status === 400 || registrationResponse.status === 500) {
      callback(registrationData.status, registrationData.message, orderId);
    } else {
      callback('failed', 'Something went wrong, Try Again', orderId);
    }
    return;
  }
  callback(registrationData.status, registrationData.message, orderId);
}

export default RegistrationSuccessHandler;