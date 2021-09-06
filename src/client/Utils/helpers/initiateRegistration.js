import RegistrationSuccessHandler from './registrationSuccessHandler';
import FetchData from './fetchData';
import LoadScript from './loadScript';

export const displayPayment = async (formData, paymentStateHandler) => {

  const {studentsList, userName, userEmail, userPhone} = formData;
  if (!studentsList || studentsList.length <= 0 || !userName || !userEmail || !userPhone) return;

  const res = await LoadScript();
  if (!res) {
    paymentStateHandler('failed', 'Something went wrong, Make sure you have stable internet connection!');
    return;
  }

  const razorPayOrderResponse = await FetchData('POST', formData, '/katha_utsav/v1/register/generate_order');

  if(razorPayOrderResponse === 'error') {
    paymentStateHandler('failed', 'Something went wrong, Try Again');
    return;
  }

  let razorPayOrderData = await razorPayOrderResponse.json();
  if(razorPayOrderResponse.status !== 200) {
    if (razorPayOrderResponse.status === 400 || razorPayOrderResponse.status === 500) {
        paymentStateHandler(razorPayOrderData.status, razorPayOrderData.message);
    } else {
      paymentStateHandler('failed', 'Something went wrong, Try Again');
    }
    return;
  }

  const options = {
    'key': razorPayOrderData.key,
    'amount': razorPayOrderData.amount.toString(),
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
      await RegistrationSuccessHandler(jsonData, paymentStateHandler);
    },
    'modal': {
      'ondismiss': async function () {
        paymentStateHandler('failed', 'Payment cancelled, Please try again');
      }
    },
    'prefill': {
      'name': userName,
      'email': userEmail,
      'contact': userPhone
    },
    'notes': {
      'address': 'Razorpay Corporate Office'
    },
    'theme': {
      'color': '#ffdb50'
    }
  };

  const razorpayWindow = new window.Razorpay(options);
  razorpayWindow.on('payment.failed', async function (response){
    await FetchData('POST', razorPayOrderData, '/katha_utsav/v1/register/registration_failed');
    paymentStateHandler('failed', `Payment failed, Due to ${response.error.description} at ${response.error.source}`);
  });
  razorpayWindow.open();
};