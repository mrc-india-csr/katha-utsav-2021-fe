import {
    put,
    takeEvery,
    all,
    call,
} from 'redux-saga/effects';

import * as actions from '../actions/index';
import _ from 'lodash';
import axios from 'axios';


export function* UploadContactData(action) {
    console.log('saga');
    try {
        let body = {
            name: action.name,
            phone: action.phoneNumber,
            message: action.message,
            email: action.emailId
        };

        const data = yield axios.post('/api/contact', body);
        yield put(actions.isUploadSuccess(false));

    } catch (error) {
        yield put(actions.isUploadSuccess(true));
    }
}