import React,{useEffect, useState} from 'react'
import axios from 'axios'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import { Navigate, useNavigate } from 'react-router-dom'

const CreateBook = () => {
  const [name ,setName] = useState('');
  const [author ,setAuthor] = useState('');
  const [year ,setYear] = useState('');
  const [loading ,setLoading] = useState(false);
  const navigate = useNavigate();
  
  const handleSaveBook = () => {
    const data = {
      name,
      author,
      year
    };
    setLoading(true);
    axios.post(`http://localhost:5555/books`,data)
    .then(() => {
        setLoading(false);
        navigate('/');
    })
  };

  return (
    <div className='p-4'>
    <BackButton />
    <h1 className='text-3xl my-4'>Show Book</h1>

    {loading ?(<Spinner/>):''}

    <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
      <div className='my-4'>
          <label className='text-xl mr-4 text-grey-500'>Name</label>
          <input
           type='text'
           value={name}
           onChange={(e) => setName(e.target.value)}
           className='border-2 border-gray-500 px-4 py-2 w-full'
          />
      </div>

      <div className='my-4'>
          <label className='text-xl mr-4 text-grey-500'>Author</label>
          <input
           type='text'
           value={author}
           onChange={(e) => setAuthor(e.target.value)}
           className='border-2 border-gray-500 px-4 py-2 w-full'
          />
      </div>

      <div className='my-4'>
          <label className='text-xl mr-4 text-grey-500'>Year</label>
          <input
           type='number'
           value={year}
           onChange={(e) => setYear(e.target.value)}
           className='border-2 border-gray-500 px-4 py-2 w-full'
          />
      </div>

      <button onClick={handleSaveBook}>Save</button>

    </div>

    </div>
  )
}

export default CreateBook