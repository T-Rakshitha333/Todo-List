import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css'
import { Container , Row, Col } from 'react-bootstrap';

const App = () => {
  return (
   <div>
    <Container>
    <Row>
      <Col lg={12} sm={12} md={12}>
    <div className="App">
      <h1 className='todos-heading'>Task Tracker</h1>
      <h1 class="create-task-heading">Create <span class="create-task-heading-subpart">Task</span></h1>
      <TaskInput />
      <TaskList />
    </div>
    </Col>
    </Row>
    </Container>
    </div>
  );
};

export default App;
