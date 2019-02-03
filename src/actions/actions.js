export const submitAnswer = (value) => {
  return {
    type: 'SUBMIT_ANSWER',
    value
  }
}

export const changeOperation = (operation) => {
  return {
    type: "CHANGE_OPERATION",
    operation
  }
}

export const changeSize1 = (size) => {
  return {
    type: "CHANGE_SIZE_1",
    size
  }
}

export const changeSize2 = (size) => {
  return {
    type: "CHANGE_SIZE_2",
    size
  }
}
