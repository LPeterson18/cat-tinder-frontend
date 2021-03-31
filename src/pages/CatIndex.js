import React, { Component } from 'react';
import { Button } from 'reactstrap';

class CatIndex extends Component {
  render() {
    return (
      <>
        <h2>CatIndex</h2>
        <ul>
          {this.props.cats.map((cat) => {
            return (
              <li>
                <a href={`/catShow/${cat.id}`}>{cat.name}</a>
              </li>
            );
          })}
        </ul>
        <Button color='primary' href='/catNew'>
          Add a Cat
        </Button>
      </>
    );
  }
}
export default CatIndex;
