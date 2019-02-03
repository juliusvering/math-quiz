import React from 'react';

const Question = ({operation, n1, n2}) => {
  switch (operation) {
    case "mul":
      return (<h1>{n1} x {n2}</h1>);
    case "div":
      return (<h1>{n1*n2} / {n1}</h1>);
    case "add":
      return (<h1>{n1} + {n2}</h1>);
    case "sub":
      return (<h1>{n1} - {n2}</h1>);
    default:
      return (<h1>??</h1>);
  }
}

export default Question;
