import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { NavLink } from 'react-router-dom'

class CatShow extends Component {
  render() {
    const cat = this.props.cat;
    debugger
    return (
      <>
        <h2>{cat.name}</h2>
        <img src={cat.profile_pic}/>
        <div>Age: {cat.age}</div>
        <div>Enjoys: {cat.enjoys}</div>
        <NavLink to='/catIndex' color='primary'>
          Back to Cats
        </NavLink>
        <NavLink to={`/catEdit/${cat.id}`} color='primary'>
          Edit {cat.name}
        </NavLink>
      </>
    );
  }
}
export default CatShow;
