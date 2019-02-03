import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import question from './reducers/reducer';

import InputContainer from './containers/InputContainer';
import QuestionContainer from './containers/QuestionContainer';
import FilterContainer from './containers/FilterContainer';

let store = createStore(question);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
    integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
    crossorigin="anonymous"
    />
        <header className="App-header">
        <QuestionContainer/>
        <InputContainer />
        <div style={{marginTop: "100px"}}>
        <FilterContainer />
        </div>
        </header>
      </div>
      </Provider>
    );
  }
}

export default App;
