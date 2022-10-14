import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import '../App.css'

const Books = () => {
  const [book, setBook] = useState([]);
  const [isError,setIsError] = useState('')

  useEffect(() => {
    const getAllData = async () => {
      try {
        const res = await axios.get('http://localhost:8000/books');
      // console.log(res);
      setBook(res.data)
        
      } catch (error) {
        console.log(error)
        setIsError(error.message)
      }
    };
    getAllData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/books/${id}`);
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };
 
  return(
    <>
      {
        isError!== '' && <p>{isError}</p>
      }
   {
    book.map((curr)=>{
      const {title,Description,price,cover} = curr
      return(
      
        <div key={curr.id}  className="con">
        <div className="division">
        {cover && <img src='' alt=''/>}
        <p>Title: {title}</p>
        <p>Description: {Description}</p>
        <p>Cover: {cover}</p>
        <p>Price: {price}</p>
         {/* <button className='delete' onClick={()=>handleDelete(id)}>Delete</button> */}
         <button className="delete" onClick={() => handleDelete(curr.id)}>Delete</button>
         <button className='update'><Link to={`/update/${curr.id}`}>Update</Link></button>
        </div>

        </div>
        
        )
      })
    }
    <button><Link to='/add'>Add new book</Link></button>

    </>
  ) 
  

};

export default Books;
