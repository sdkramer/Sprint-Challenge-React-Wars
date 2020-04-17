import React from 'react'

const NameList = ({characters}) => {
  return (
    <div className='list-characterNames container'>
      <h2>Type in one of the following characters to see details:</h2>
      <ul>
        {/* <li>{characters && `${(characters[0]).name}`}</li> */}
              {/* Loop over generate <li/> elements  */}
         
                
                  {characters && characters.map((item, index) => <li key={index}>{item.name}</li>
              )} 
            </ul>
    </div>
  )
}


export default NameList;