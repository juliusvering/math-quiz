import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const Filter = ({changeOper, changeS1, changeS2}) => (
      <ButtonGroup>
      <Dropdown>
  <Dropdown.Toggle id="dropdown-basic">
    Operation
  </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item href="#" onClick={e => {changeOper("mul")}}>Multiplication</Dropdown.Item>
    <Dropdown.Item href="#" onClick={e => {changeOper("div")}}>Division</Dropdown.Item>
    <Dropdown.Item href="#" onClick={e => {changeOper("add")}}>Addition</Dropdown.Item>
    <Dropdown.Item href="#" onClick={e => {changeOper("sub")}}>Subtraction</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
      <Dropdown>
  <Dropdown.Toggle id="dropdown-basic">
    Size 1
  </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item href="#" onClick={e => {changeS1(1)}}>One</Dropdown.Item>
    <Dropdown.Item href="#" onClick={e => {changeS1(2)}}>Two</Dropdown.Item>
    <Dropdown.Item href="#" onClick={e => {changeS1(3)}}>Three</Dropdown.Item>
    <Dropdown.Item href="#" onClick={e => {changeS1(4)}}>Four</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
      <Dropdown>
  <Dropdown.Toggle id="dropdown-basic">
    Size 2
  </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item href="#" onClick={e => {changeS2(1)}}>One</Dropdown.Item>
    <Dropdown.Item href="#" onClick={e => {changeS2(2)}}>Two</Dropdown.Item>
    <Dropdown.Item href="#" onClick={e => {changeS2(3)}}>Three</Dropdown.Item>
    <Dropdown.Item href="#" onClick={e => {changeS2(4)}}>Four</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
</ButtonGroup>
)


export default Filter;
