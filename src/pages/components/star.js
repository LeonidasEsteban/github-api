import React from 'react'
import './star.css'

function Star(props) {
  return (
    <div className="Star">
      <p>{props.login}</p>
      <img src={props.avatar_url} alt={props.login} width={200} height={200} />
    </div>
  )
}

export default Star
