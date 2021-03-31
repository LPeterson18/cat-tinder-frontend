import React, { Component } from 'react';
import { Button } from 'reactstrap';

class CatShow extends Component {
  render() {
    const cat = this.props.cat;
    return (
      <>
        <h2>{cat.name}</h2>
        <div>Age: {cat.age}</div>
        <div>Enjoys: {cat.enjoys}</div>
        <Button href='/catIndex' color='primary'>
          Back to Cats
        </Button>
      </>
    );
  }
}
export default CatShow;
