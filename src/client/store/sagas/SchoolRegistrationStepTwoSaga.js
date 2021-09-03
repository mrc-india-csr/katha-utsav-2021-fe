import {
  put,
  takeEvery,
  all,
  call,
} from 'redux-saga/effects';

import * as actions from '../actions/index';
import {IndividualRegistrationValidation} from "../../Utils";

export function* ValidateSchoolStepTwoRegistration(action) {
  const stepTwoData = action.stepTwoData;
  let errorObject = []
  let isError = []
  for (let step = 0; step < stepTwoData.length; step++) {
    const {SchoolError, CityError, ...stepTwoErrorDetails} = yield call(IndividualRegistrationValidation, stepTwoData[step].studentName, stepTwoData[step].studentEmail, stepTwoData[step].studentPhone, '', '', stepTwoData[step].studentClass, stepTwoData[step].storyCategory, stepTwoData[step].storyPath);
    errorObject.push(stepTwoErrorDetails)
    let isValuesError = Object.values(stepTwoErrorDetails).indexOf('Please') > -1
    if(isValuesError) {
      isError.push(isValuesError)
    }
  }

  if (isError.length > 0) {
    yield put(actions.validateFailSchoolStepTwo(errorObject));
  }
  else {
    yield put(actions.validateSuccessSchoolStepTwo(action.stepTwoData));
  }
}

