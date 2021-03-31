import React, { Component } from 'react'



class CatIndex extends Component{


  render(){
    return(
      <>
        <h2>CatIndex</h2>
        <ul>
        {this.props.cats.map(cat => {
          return (
            <li>
              <a href={`/catShow/${cat.id}`}>{ cat.name }</a>
            </li>
          )
        })}
        </ul>
      </>
    )
  }
}
export default CatIndex
