import React, {useState} from 'react'

function LikeBtn() {
    const [count, setCount] = useState(0)
    // const [formData, setFormData]= useState("")
    // const [inputNum, setInputNum]=useState([])

    function handleCount() {
        setCount((count) => count + 1)
      }

    // function handleForm(e) {
    //     setFormData(e.target.value)
    // }
  return (
    <div>
        {/* <input type="text" placeholder="enter number" value={formData} onChange={handleForm} /> */}
      <button onClick={handleCount}>Like {count} </button>
    </div>
  )
}

export default LikeBtn
