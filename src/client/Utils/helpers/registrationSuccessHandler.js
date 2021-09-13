import FetchData from "./fetchData";
const axios = require('axios');

const RegistrationSuccessHandler = async (jsonData = {}, callback, orderId) => {
  try {
    const body = jsonData;
    const registrationResponse = (await axios.post('/api/complete_registration', body)).data;
    //const registrationResponse = await FetchData('POST', jsonData, '/katha_utsav/v1/register/complete_registration');

    if (registrationResponse === 'error') {
      callback('failed', 'Something went wrong, Try Again', orderId);
      return;
    }

    let registrationData = registrationResponse;
    // if(registrationResponse.status !== 200) {
    //   if (registrationResponse.status === 400 || registrationResponse.status === 500) {
    //     callback(registrationData.status, registrationData.message, orderId);
    //   } else {
    //     callback('failed', 'Something went wrong, Try Again', orderId);
    //   }
    //   return;
    // }
    callback(registrationData.status, registrationData.message, orderId);
  }
  catch (error) {
    paymentStateHandler('failed', 'OOPS, Something went wrong, Please try again sager some time', 'no order id generated');
  }
}

export default RegistrationSuccessHandler;