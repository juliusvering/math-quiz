const genNumber = (size) => {
  return Math.floor((Math.random() * 10**size) + 1);
};

const expectedVal = (n1, n2, op) => {
  var expectedVal;
  switch (op) {
    case "mul":
      expectedVal = n1*n2;
      break;
    case "div":
      expectedVal = n2;
      break;
    case "add":
      expectedVal = n1+n2;
      break;
    case "sub":
      expectedVal = n1-n2;
      break;
  }
  return expectedVal;
}

const question = (state = {
  n1: genNumber(2),
  n2: genNumber(2),
  size1: 2,
  size2: 2,
  op: "mul"}, action) => {
  switch (action.type) {
    case "SUBMIT_ANSWER":
      if (action.value === expectedVal(state.n1, state.n2, state.op)) {
        let num1 = genNumber(state.size1);
        let num2 = genNumber(state.size2);
        return Object.assign({}, state, {
          n1: num1,
          n2: num2,
          tryAgain: false
        })
      }
      return Object.assign({}, state, {
        tryAgain: true
      })

    case "CHANGE_OPERATION":
      return Object.assign({}, state, {
        op: action.operation
      })

    case "CHANGE_SIZE_1":
      return Object.assign({}, state, {
        size1: action.size,
        n1: genNumber(action.size)
      })

    case "CHANGE_SIZE_2":
      return Object.assign({}, state, {
        size2: action.size,
        n2: genNumber(action.size)
      })

    default:
      return state;
  }
}

export default question;
