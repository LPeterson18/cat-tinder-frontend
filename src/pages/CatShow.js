import React, { Component } from 'react'



class CatShow extends Component{


  render(){
    const cat = this.props.cat;
    return(
      <>
        <h2>Show</h2>
        <div>Name: { cat.name }</div>
        <div>Age: { cat.age }</div>
        <div>Enjoys: { cat.enjoys }</div>
      </>
    )
  }
}
export default CatShow
