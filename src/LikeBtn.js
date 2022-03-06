import React, {useState} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function LikeBtn() {
    const [count, setCount] = useState(0)
    // const [formData, setFormData]= useState("")
   

    function handleCount() {
        setCount((count) => count + 1)
      }

    // function handleForm(e) {
    //     setFormData(e.target.value)
        
    // }
  return (
    <div>
        {/* <TextField size="small" type="text" placeholder="enter number" value={formData} onChange={handleForm} /> */}
      <Button variant="outlined" onClick={handleCount}>Like {count} </Button>
    </div>
  )
}

export default LikeBtn
