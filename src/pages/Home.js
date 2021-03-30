import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Home extends Component {
  render() {
    return (
      <>
        <img
          src='https://images.unsplash.com/photo-1601992688411-b6f5ac51b012?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80'
          style={{ width: '100%' }}
        />
        <Button color='primary' size='lg' block href='/catIndex'>
          Go to Cat Page
        </Button>
      </>
    );
  }
}
export default Home;
