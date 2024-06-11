import React,{useEffect, useState} from 'react'
import axios from 'axios'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import { Navigate, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const EditBook = () => {
  const [name ,setName] = useState('');
  const [author ,setAuthor] = useState('');
  const [year ,setYear] = useState('');
  const [loading ,setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect( ()=> {
    setLoading(true);
    axios.get(`https://react-start-blush.vercel.app/books/${id}`)
    .then((response) => {
        setName(response.data.name);
        setAuthor(response.data.author);
        setYear(response.data.year);
        setLoading(false);
    })
    .catch((error) => {
        console.log(error);
        setLoading(false);
    });
}, []);
  
  const handleEditBook = () => {
    const data = {
      name,
      author,
      year
    };
    setLoading(true);
    axios.put(`https://react-start-blush.vercel.app/books/${id}`,data)
    .then(() => {
        setLoading(false);
        navigate('/');
    })
  };

  return (
    <div className='p-4'>
    <BackButton />
    <h1 className='text-3xl my-4'>Edit Book</h1>

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

      <button onClick={handleEditBook}>Edit</button>

    </div>

    </div>
  )
}

export default EditBook
