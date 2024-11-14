
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { FaLock,FaLockOpen} from "react-icons/fa";

import "./index.css"

const ColorPicker = (props) => {
    const {colorDetails,isLocked,id,lockStatus} = props
    // console.log("Color Details:",colorDetails,id)

    const clickOnColorToCopy = (event) => {
        navigator.clipboard.writeText(event.target.innerText)
        toast("Copied to clipboard")
    }

    const lockClassName = lockStatus ?  <FaLock/> : <FaLockOpen/>

  
    const lockUnlockCOlor = () => {
      isLocked(id)
    }

  return (  
    <div className="color-picker-container" style={{backgroundColor:`${colorDetails}`}} key={id}>
        <p onClick={clickOnColorToCopy} className='color'>{colorDetails}</p>
        <ToastContainer 
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        theme="light"/>
      <div onClick={lockUnlockCOlor} className='lock-container'>
        {lockClassName}
      </div>
    </div>
   
  )
}

export default ColorPicker