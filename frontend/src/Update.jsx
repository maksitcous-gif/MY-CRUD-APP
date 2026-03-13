import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

function Update() {
  const [values, setValues] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    website: ''
  })

  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:3000/users/${id}`)
      .then(res => {
        setValues(res.data)
      })
      .catch(err => console.log(err))
  }, [id])

  const handleUpdate = (event) => {
    event.preventDefault()

    axios.put(`http://localhost:3000/users/${id}`, values)
      .then(res => {
        console.log(res.data)
        navigate('/')
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h2>UPDATE USER</h2>

        <form onSubmit={handleUpdate}>
          <div className='mb-2'>
            <label>Enter Name</label>
            <input type='text' className='form-control'
              value={values.name}
              onChange={e => setValues({ ...values, name: e.target.value })} />
          </div>

          <div className='mb-2'>
            <label>Enter Username</label>
            <input type='text' className='form-control'
              value={values.username}
              onChange={e => setValues({ ...values, username: e.target.value })} />
          </div>

          <div className='mb-2'>
            <label>Enter Email</label>
            <input type='email' className='form-control'
              value={values.email}
              onChange={e => setValues({ ...values, email: e.target.value })} />
          </div>

          <div className='mb-2'>
            <label>Enter Phone</label>
            <input type='text' className='form-control'
              value={values.phone}
              onChange={e => setValues({ ...values, phone: e.target.value })} />
          </div>

          <div className='mb-2'>
            <label>Enter Website</label>
            <input type='text' className='form-control'
              value={values.website}
              onChange={e => setValues({ ...values, website: e.target.value })} />
          </div>

          <button type='submit' className='btn btn-primary'>Update</button>
          <Link to='/' className='btn btn-secondary ms-3'>Back</Link>
        </form>
      </div>
    </div>
  )
}

export default Update
