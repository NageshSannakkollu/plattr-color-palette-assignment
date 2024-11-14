import Header from "./components/Header"
import ColorPicker from "./components/ColorPicker"
import SavedColorDetails from "./components/SavedColorDetails"


import { useState } from "react"
import "./App.css"

const color_palette_size = 5;

const generateColor = () => {

      const newColors = '#'+Math.floor(Math.random()* 16777215).toString(16)
      return (newColors)
   }

const App = () => {
    const storedColors = JSON.parse(localStorage.getItem('saved Color'))
    const [getColor,setGetColor] = useState(Array.from({length:color_palette_size},generateColor));
    const [lockStatus,setLockStatus] = useState(false)
    const [saveColorsPalette,setSaveColorPalette] = useState(storedColors !== null ?storedColors:[] )
    console.log(saveColorsPalette)

    const generateNewColorPalette = () => {
        let newColors = []
        for(let i=0;i<5;i++){
            if(lockStatus){
                newColors[i] = getColor[i]
            }else{
                newColors[i] = generateColor()
            }
        }
        setGetColor(newColors)
    }

    const clickSaveColorPalette = () => {
        const newColors = [...saveColorsPalette,getColor] 
        localStorage.setItem('saved Color',JSON.stringify(newColors))
        setSaveColorPalette(newColors)
    }

   document.body.onkeyup =(e) => {
    if(e.key === " " || e.code === "Space"){
    generateNewColorPalette()
    }
   }

   const clickedOnLock =() => {
        setLockStatus(!lockStatus)
   }

    return(
        <div>
            <Header/>
            <div className="color-generator-container">
            <div className="button-container"> 
                <button type="button" className="color-generator" onClick={clickSaveColorPalette}>Save</button>
            </div> 
            <div className="color-picker-main-container">
            {getColor.map((eachColor,index) => (
                <ColorPicker colorDetails={eachColor} key={index} id={index} isLocked={clickedOnLock} lockStatus={lockStatus}/>
            ))}
            </div>
              </div>
            <div className="show-saved-colors-container">
                <h2 className="saved-colors-title">Saved Color Palette:</h2>
                {saveColorsPalette.length > 0 ?
                (<ul className="saved-color-main-container">
                    {saveColorsPalette.map((eachColor,index) => 
                        <SavedColorDetails savedColorDetails={eachColor} key={index} id={index}/>
                    )}
                </ul>
                ):(
                    <div className="">
                        <p className="no-saved-colors">No Saved Colors</p>
                    </div>
                ) }
            </div>
      
        </div>
    )
}

export default App