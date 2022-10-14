import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Update = () => {
    const [state,setState] = useState({
        title:'',
        Description:'',
        price:null,
        cover:''
    });
    const navigate = useNavigate()
    
    const handleClick = (e) =>{
       const name = e.target.name;
       const value = e.target.value;
       setState((prev)=>({...prev,[name] :value}))

    }
    // console.log(book)
    const handleSubmit = async (e) =>{
        try {
            e.preventDefault()
        await axios.post("http://localhost:8000/books",state)
          navigate('/books')  
        } catch (error) {
           console.log(error) 
        }
    }
    // handleSubmit()
  return (
    <>
    <div className="form">
        <h1>Update a new book</h1>
        <input className='in' placeholder='title' type="text" name='title'  onChange={handleClick}/>
        <input className='in' placeholder='description' type="text" name='Description'  onChange={handleClick}/>
        <input className='in' placeholder='price' type="number" name='price'  onChange={handleClick}/>
        <input className='in' placeholder='' type="text" name='cover'  onChange={handleClick}/>

       <button onClick={(e)=>handleSubmit()}>Update</button>
    </div>
    </>
  )
}

export default Update