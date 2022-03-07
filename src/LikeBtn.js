import React, {useState} from 'react'
import Button from '@mui/material/Button';

function LikeBtn() {
    const [count, setCount] = useState(0)
  
   

    function handleCount() {
        setCount((count) => count + 1)
      }

  
  return (
    <div>
      <Button variant="outlined" onClick={handleCount}>Like {count} </Button>
    </div>
  )
}

export default LikeBtn
