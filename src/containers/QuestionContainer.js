import Question from '../components/Question';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    n1: state.n1,
    n2: state.n2,
    operation: state.op
  }
}

let QuestionContainer = connect(mapStateToProps, null)(Question);

export default QuestionContainer;
