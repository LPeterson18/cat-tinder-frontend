import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { NavLink } from 'react-router-dom'

class CatShow extends Component {
  render() {
    const cat = this.props.cat;
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
        <NavLink to={"/catindex"}>
          <Button color="secondary"onClick={ () => this.props.deleteCat(this.props.cat.id) }>
            Delete Cat Profile
          </Button>
        </NavLink>
      </>
    );
  }
}
export default CatShow;
