import React from 'react'

function Cards(props) {

  return (
    
    
    <div className="card col-4 mb-5" style={{width : '18rem'}}>
    <img src= {props.imgSrc} className="card-img-top" alt="..."></img>
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.descreption}</p>
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">{props.li1}</li>
      <li className="list-group-item">{props.li2}</li>
      <li className="list-group-item">{props.li3}</li>
    </ul>
  </div>
  
    
  )
}

export default Cards