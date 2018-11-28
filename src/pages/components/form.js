import React from 'react';

function Form({ handleSubmit, setRef }) {
  return (
    <form onSubmit={handleSubmit} ref={setRef}>
      <input type="text" placeholder="Username" name="username" />
    </form>
  )
}

export default Form
