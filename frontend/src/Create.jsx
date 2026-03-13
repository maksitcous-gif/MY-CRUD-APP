import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Create() {
  const [values, setValues] = useState({
    name: '',
    username: '',
    email: '',
    phone: ''
   

  })
  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
     axios.post('http://localhost:3000/users', values)
        .then(res =>
           {console.log(res)
            navigate('/')
           })
           .catch(err => console.log(err))
  }
  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
      
        <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
          <h2>ADD USER</h2>
          <form onSubmit={handleSubmit}>
            <div className='mb-2'>
              <label htmlFor="name">Enter Name</label>
              <input type='text' placeholder='Name' className='form-control' 
              onChange={e => setValues({...values, name: e.target.value})} />
            </div>
            <div className='mb-2'>
              <label htmlFor="username">Enter Username</label>
              <input type='text' placeholder='Username' className='form-control' 
              onChange={e => setValues({...values, username: e.target.value})} />
            </div>
            <div className='mb-2'>
              <label htmlFor="email">Enter Email</label>
              <input type='email' placeholder='email' className='form-control' 
              onChange={e => setValues({...values, email: e.target.value})} />
            </div>
            
            <div className='mb-2'>
              <label htmlFor="phone">Enter Phone</label>
              <input type='text' placeholder='----' className='form-control'
               onChange={e => setValues({...values, phone: e.target.value})} />
            </div>
           
            <button type='submit' className='btn btn-primary '>Sumit</button>
            <Link to='/' className='btn btn-secondary ms-3 ' >Back</Link>
            
          </form>

        </div>
      
    </div>
  )
}

export default Create
