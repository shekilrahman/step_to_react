import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const {id} = useParams();

  useEffect( ()=> {
    setLoading(true);
    axios.get(`http://localhost:5555/books/${id}`)
    .then((response) => {
        setBook(response.data);
        setLoading(false);
    })
    .catch((error) => {
        console.log(error);
        setLoading(false);
    });
}, []);

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Show Book</h1>

      {loading ?(
            <Spinner/>
        ):(
         
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
              <div className='my-4'>
                <span className='text-xl mr-4 text-grey-500'>Id</span>
                <h1>{book._id}</h1>
              </div>
              <div className='my-4'>
                <span className='text-xl mr-4 text-grey-500'>Name</span>
                <span>{book.name}</span>
              </div>
              <div className='my-4'>
                <span className='text-xl mr-4 text-grey-500'>Author</span>
                <span>{book.author}</span>
              </div>
              <div className='my-4'>
                <span className='text-xl mr-4 text-grey-500'>Year</span>
                <span>{book.year}</span>
              </div>
            </div>
        )}
    </div>
  )
}

export default ShowBook