import React from 'react';
import Star from './star';
import './repo.css'

function Repo(props) {
  return (
    <div
      className="Repo"
      onClick={() => { props.handleRepoClick(props.name) }}>
      <p>
        {props.name}
      </p>
      {
        props.stars.map((data, index) => (
          <Star key={index} {...data}  />
        ))
      }
    </div>
  )
}

Repo.defaultProps ={
  stars: []
}
export default Repo
