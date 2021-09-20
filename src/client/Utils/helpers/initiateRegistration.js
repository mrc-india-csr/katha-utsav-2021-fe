import RegistrationSuccessHandler from './registrationSuccessHandler';
import LoadScript from './loadScript';

const axios = require('axios');

export const displayPayment = async (formData, paymentStateHandler) => {
  try {
    const { studentsList, userName, userEmail, userPhone } = formData;
    let paymentFailed = false;
    if (!studentsList || studentsList.length <= 0 || !userName || !userEmail || !userPhone) return;

    const res = await LoadScript();
    if (!res) {
      paymentStateHandler('failed', 'Something went wrong, Make sure you have stable internet connection!', '');
      return;
    }
    const razorPayOrderResponse = (await axios.post('/api/generate_order', formData)).data;

    if (razorPayOrderResponse === 'error') {
      paymentStateHandler('failed', 'Something went wrong, Try Again', '');
      return;
    }

    let razorPayOrderData = razorPayOrderResponse


    const options = {
      'key': razorPayOrderData.key,
      'amount': razorPayOrderData.amount + "",
      'currency': razorPayOrderData.currency,
      'name': 'Katha Utsav',
      'description': 'Registration Fees',
      'image': '/logo.png',
      'order_id': razorPayOrderData.id,
      'handler': async function (response) {
        const { razorpay_payment_id, razorpay_signature } = response
        const jsonData = {
          paymentId: razorpay_payment_id,
          signature: razorpay_signature,
          ...razorPayOrderData,
        };
        await RegistrationSuccessHandler(jsonData, paymentStateHandler, razorPayOrderData.id);
      },
      'modal': {
        'ondismiss': async function () {
          if (paymentFailed) {
            await axios.post('/api/registration_failed', razorPayOrderData);
            paymentStateHandler('failed', `No worries, Your payment order ID is ${razorPayOrderData.id}.`, razorPayOrderData.id);
          } else {
            paymentStateHandler('failed', 'OOPS, Something went wrong, Please try again sager some time', '');
          }
        }
      },
      'notify': {
        'sms': true,
        'email': true
      },
      'theme': {
        'color': '#ffdb50'
      }
    };
    const razorpayWindow = new window.Razorpay(options);
    razorpayWindow.on('payment.failed', async function (response) {
      paymentFailed = true;
    });
    razorpayWindow.open();
  } catch (error) {
    paymentStateHandler('failed', 'Please try again after some time', '');
  }
};