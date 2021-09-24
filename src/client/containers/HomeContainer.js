import { connect } from 'react-redux';
import _ from 'lodash';
import * as action from '../store/actions/index';
import Home from '../components/Home/Home'

const HomeContainer = connect(
    null,
    null
  )(Home);

  export default HomeContainer;
