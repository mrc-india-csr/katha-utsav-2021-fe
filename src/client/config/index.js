'use strict';
import { MergeIgnoringUndefined } from '../Utils/index';
const env = process.env.NODE_ENV;

const validEnvironments = ['local', 'development', 'production'];
export default MergeIgnoringUndefined(
  require('./defaults'),
  validEnvironments.indexOf(env) > -1 ? require('./' + env) : /* istanbul ignore next */ require('./local')
);