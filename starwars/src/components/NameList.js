import React from 'react'

export default function NameList(characters) {
  return (
    <div className='list-characterNames container'>
      <h2>Type in one of the following characters to see details:</h2>
      <ul>
              {/* Loop over generate <li/> elements  */}
              {characters.name.map(
                (name, index) => <li key={index}>{name}</li>
              )}
            </ul>
    </div>
  )
}
