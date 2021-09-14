const axios = require('axios');

const RegistrationSuccessHandler = async (jsonData = {}, callback, orderId) => {
  try {
    const registrationResponse = (await axios.post('/api/complete_registration', jsonData)).data;

    if (registrationResponse === 'error') {
      callback('failed', 'Something went wrong, Try Again', orderId);
      return;
    }

    let registrationData = registrationResponse;
    callback(registrationData.status, registrationData.message, orderId);
  }
  catch (error) {
    callback('failed', 'OOPS, Something went wrong, Please try again sager some time', 'no order id generated');
  }
}

export default RegistrationSuccessHandler;