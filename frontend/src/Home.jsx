import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Home() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])

  const handleDelete = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this user?')
    if (confirmDelete) {
      axios.delete(`http://localhost:3000/users/${id}`)
        .then(() => {
          
          setData(data.filter(user => user.id !== id))
        })
        .catch(err => console.log(err))
    }
  }

  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light min-vh-100'>
      <h1>List of Users</h1>

      <div className='col-12 col-md-10 col-lg-8 bg-white border shadow p-4 rounded'>
        <div className='d-flex justify-content-end mb-3'>
          <Link to='/create' className='btn btn-success'>Add +</Link>
        </div>

        <div className="row justify-content-center">
          <table className='table table-striped table-hover'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
                
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {data.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  
                  <td>
                    <div className="d-flex gap-2">
                      <Link to={`/read/${user.id}`} className='btn btn-info'>Read</Link>
                      <Link to={`/update/${user.id}`} className='btn  btn-warning'>Edit</Link>
                      <button onClick={() => handleDelete(user.id)} className='btn btn-danger'>Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  )
}

export default Home
