const checkRegistrationOpen = () => {
  const endDate = new Date('2021-11-15');
  const todayDate = new Date();
  return todayDate <= endDate;
}

export default checkRegistrationOpen();