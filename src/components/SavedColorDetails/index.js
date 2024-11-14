import React from 'react'
import SavedColors from '../SavedColors'
import "./index.css"

const SavedColorDetails = (props) => {
     const {savedColorDetails} = props
  return (
    <ul className='saved-color-palette'>{savedColorDetails.map((eachColor,index) => (
        <SavedColors savedColors={eachColor} key={index} id={index} />
    ))}
    </ul>
  )
}

export default SavedColorDetails