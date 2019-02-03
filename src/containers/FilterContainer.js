import Filter from '../components/Filter';

import { connect } from 'react-redux';
import { changeOperation, changeSize1, changeSize2 } from '../actions/actions';

const mapDispatchToProps = (dispatch) => {
  return {
    changeS1: (size) => {dispatch(changeSize1(size))},
    changeOper: (operation) => {dispatch(changeOperation(operation))},
    changeS2: (size) => {dispatch(changeSize2(size))}
  }
}

let FilterContainer = connect(null, mapDispatchToProps)(Filter);

export default FilterContainer;
