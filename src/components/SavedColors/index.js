import React from 'react'
import "./index.css"

const SavedColors = (props) => {
    const {savedColors,id} = props
    // console.log("Saved Colors:",savedColors )
  return (
    <li className='saved-list-container'  key={id}>
        <p className="color-palette" style={{backgroundColor:`${savedColors}`}}>{savedColors}</p>
    </li>
  )
    
  
}

export default SavedColors