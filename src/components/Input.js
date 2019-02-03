import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {input: ""};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    this.props.handleSubmit(this.state.input);
    this.setState({input: ""})
  }

  handleChange(event) {
    this.setState({input: event.target.value});
  }

  render () {
    return (<Form onSubmit={(e) => {
      this.props.handleSubmit(this.state.input);
      this.setState({input: ""});
      e.preventDefault();
    }}>
      <Row>
      <Col>
        <Form.Control autoFocus
        type="number"
        value={this.state.input}
        onChange={this.handleChange}
        placeholder={(this.props.tryAgain ? "Try again!" : "Enter solution")} />
      </Col>
      <Col>
      <Button variant="primary" type="submit">
        Submit answer!
      </Button>
      </Col>
      </Row>
    </Form>);
  }
}

export default Input;
