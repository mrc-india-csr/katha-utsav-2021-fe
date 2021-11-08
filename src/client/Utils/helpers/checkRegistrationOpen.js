const checkRegistrationOpen = () => {
  const endDate = new Date('2021-11-9');
  const todayDate = new Date();
  return todayDate <= endDate;
}

export default checkRegistrationOpen();