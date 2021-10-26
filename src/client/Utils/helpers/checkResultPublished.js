const checkResultPublished = () => {
  const resultDate = new Date('2021-10-19');
  const todayDate = new Date();
  return todayDate > resultDate;
};

export default checkResultPublished();