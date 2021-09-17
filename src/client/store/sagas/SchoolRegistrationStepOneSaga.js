import {
    put,
    takeEvery,
    all,
    call,
} from 'redux-saga/effects';

import * as actions from '../actions/index';
import _ from 'lodash';

export function* ValidateSchoolStepOneRegistration(action) {
    const { schoolName,emailId,phoneNumber,schoolCoordinatorName,city } = action;
    yield put(actions.validateSuccessSchoolStepOne(schoolName,emailId,phoneNumber,schoolCoordinatorName,city));
    yield put(actions.updateStep(2));
}
