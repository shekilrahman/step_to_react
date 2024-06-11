import React,{useEffect, useState} from 'react'
import axios from 'axios'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import { Navigate, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const DeleteBook = () => {

  const [loading ,setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();

  const handleDeleteBook = () => {
    setLoading(true);
    axios.delete(`http://localhost:5555/books/${id}`)
    .then(() => {
        setLoading(false);
        navigate('/');
    })
  };

  return (
    <div>
      <button onClick={handleDeleteBook}>Delete</button>
    </div>
  )
}

export default DeleteBook