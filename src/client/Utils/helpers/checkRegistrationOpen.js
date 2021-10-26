const checkRegistrationOpen = () => {
  const endDate = new Date('2021-10-6');
  const todayDate = new Date();
  return todayDate < endDate;
}

export default checkRegistrationOpen();