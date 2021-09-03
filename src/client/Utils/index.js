export const renderIf = (condition, componentCallback, falseCallback) => {
  if (condition()) {
    return componentCallback();
  } else if (falseCallback) {
    return falseCallback();
  } else {
    return null;
  }
};

export const IndividualRegistrationValidation = (name, emailId, phoneNumber, School, City, Class, StoryCategory, fileData) => {
  let errorObject = { emailError: "", nameError: "", phoneNumberError: "", SchoolError: "", CityError: "", ClassError: "", StoryCategoryError: "", fileError: "", isError: false }
  let emailValid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(emailId);
  let phoneNumberValid = /^\d+$/.test(phoneNumber);
  let schoolValid = /^[a-zA-Z]+$/.test(School);
  let cityValid  = /^[a-zA-Z]+$/.test(City);

  if (_.isNull(emailId) || _.isEmpty(emailId) || !emailValid) {
    errorObject.emailError = "Please enter a valid email";
    errorObject.isError = true;
  }
  if (_.isEmpty(name) || _.isNull(name)) {
    errorObject.nameError = "Please enter a valid name";
    errorObject.isError = true;
  }
  if (_.isEmpty(School) || _.isNull(School) || !schoolValid) {
    errorObject.SchoolError = "Please enter a valid school";
    errorObject.isError = true;
  }
  if (_.isNull(phoneNumber) || _.isEmpty(phoneNumber) || !phoneNumberValid) {
    errorObject.phoneNumberError = "Please enter a valid phoneNumber";
    errorObject.isError = true;
  }
  if (_.isEmpty(StoryCategory) || !_.includes(["Fiction", "Non-Fiction", "Poetry"], StoryCategory)) {
    errorObject.StoryCategoryError = "Please enter a valid StoryCategory";
    errorObject.isError = true;
  }
  if (_.isEmpty(Class) || !_.includes(["IV to VI", "VII to IX", "X to XII"], Class)) {
    errorObject.ClassError = "Please enter a valid Class";
    errorObject.isError = true;
  }
  if (_.isEmpty(fileData.name) || fileData.size > 10000000) {
    errorObject.fileError = "Please Upload file less than 10mb";
    errorObject.isError = true;
  }
  if (_.isEmpty(City) || _.isNull(City) || !cityValid) {
    errorObject.CityError = "Please Provide a valid city";
    errorObject.isError = true;
  }
  return errorObject;
}

export const SchoolRegistrationStepOneValidation = (schoolName,emailId,phoneNumber,schoolCoordinatorName,city) => {
  let errorObject = {   schoolNameError: "", emailIdError:"", phoneNumberError:"", schoolCoordinatorNameError:"", cityError:"", isError: false }
  let emailValid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(emailId);
  let phoneNumberValid = /^\d+$/.test(phoneNumber);
  let schoolValid = /^[a-zA-Z]+$/.test(schoolName);
  let nameValid = /^[a-zA-Z]+$/.test(schoolCoordinatorName);
  let cityValid  = /^[a-zA-Z]+$/.test(city);

  if (_.isNull(emailId) || _.isEmpty(emailId) || !emailValid) {
    errorObject.emailIdError = "Please enter a valid email";
    errorObject.isError = true;
  }
  if (_.isNull(schoolName) || _.isNull(schoolName) || !schoolValid) {
    errorObject.schoolNameError = "Please enter a valid school name";
    errorObject.isError = true;
  }
  if (_.isEmpty(schoolCoordinatorName) || _.isNull(schoolCoordinatorName) || !nameValid) {
    errorObject.schoolCoordinatorNameError = "Please enter a valid school Coordinator name";
    errorObject.isError = true;
  }
  if (_.isNull(phoneNumber) || _.isEmpty(phoneNumber) || !phoneNumberValid) {
    errorObject.phoneNumberError = "Please enter a valid phoneNumber";
    errorObject.isError = true;
  }

  if (_.isEmpty(city) || _.isNull(city) || !cityValid) {
    errorObject.cityError = "Please Provide a valid city";
    errorObject.isError = true;
  }
  return errorObject;
}