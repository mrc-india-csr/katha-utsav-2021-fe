const checkResultPublished = () => {
  const resultDate = new Date('2021-11-16');
  const todayDate = new Date();
  return todayDate >= resultDate;
};

export default checkResultPublished();