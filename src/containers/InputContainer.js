import Input from '../components/Input';

import { connect } from 'react-redux';
import { submitAnswer } from '../actions/actions';

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (value) => {
      dispatch(submitAnswer(parseInt(value)));
    }
  }
}

const mapStateToProps = (state) => {
  return {
    tryAgain: state.tryAgain
  }
}

let InputContainer = connect(mapStateToProps, mapDispatchToProps)(Input);

export default InputContainer;
