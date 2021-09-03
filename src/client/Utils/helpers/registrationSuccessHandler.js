import FetchData from "./fetchData";

const RegistrationSuccessHandler = async (jsonData = {}, callback) => {
  const registrationResponse = await FetchData('POST', jsonData, '/katha_utsav/v1/register/complete_registration');

  if(registrationResponse === 'error') {
    callback('failed', 'Something went wrong, Try Again');
    return;
  }

  let registrationData = await registrationResponse.json();
  if(registrationResponse.status !== 200) {
    if (registrationResponse.status === 400 || registrationResponse.status === 500) {
      callback(registrationData.status, registrationData.message);
    } else {
      callback('failed', 'Something went wrong, Try Again');
    }
    return;
  }
  callback(registrationData.status, registrationData.message);
}

export default RegistrationSuccessHandler;