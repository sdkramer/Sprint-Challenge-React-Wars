import React from 'react'

const SonnetsList = ({sonnetsList}) => {

  return (
    <div className='list-characterNames container'>
      <h2>Type in one of the following sonnets to see details:</h2>
      <ul>
        {/* <li>{sonnetsList && `${(sonnetsList[0]).name}`}</li> */}
              {/* Loop over generate <li/> elements  */}
         
                
                  {sonnetsList && sonnetsList.map((item, index) => <li key={index}>{item.title}</li>    
              )} 
            </ul>
            
    </div>
  )
}


export default SonnetsList;