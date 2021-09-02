import {
  put,
  takeEvery,
  all,
  call,
} from 'redux-saga/effects';

import * as actions from '../actions/index';
import _ from 'lodash';

export function* ValidateSchoolStepTwoRegistration(action) {
  const { stepTwoData } = action;
  yield put(actions.validateSuccessSchoolStepOne('',''));
}

