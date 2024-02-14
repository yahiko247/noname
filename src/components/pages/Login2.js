import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from '../../LoginValidation';
import axios from 'axios';


function Login2() {
  const [values, setValues] = useState({
    email: '',
    password: ''

  })
  const navigate = useNavigate();
  const [errors, setErrors] = useState({})
  const handleInput =(event) => {
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values)); 
  
    
    setErrors(prevErrors => {
      if (prevErrors.email === "" && prevErrors.password === "") {
        axios.post('http://localhost:8081/login', values)
          .then(res => {
            if (res.data === "Success madafak") {
              navigate('/home');
            } else {
              alert("wapa kay account ui pag buhat sa");
            }
          })
          .catch(err => console.log(err));
      }
      return prevErrors; 
    });
  }
  
  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100 '>
        <div className=' bg-dark text-white p-3 rounded w-25 border border-3'>
          <strong><h2>Log in</h2></strong>
                <form action="" onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" placeholder='Enter Email' name="email"
                        onChange={handleInput} className='form-control rounded-0'/>
                        {errors.email &&<span className='text-danger'> {errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" placeholder='Enter Password' name="password"
                        onChange={handleInput} className='form-control rounded-0'/>
                         {errors.password &&<span className='text-danger'> {errors.password}</span>}
                     </div>
                     
                    <button type='submit' className='btn btn-success w-100'>login</button>
                    <p>Have you created an Account? <Link to="/signup">Sign Up</Link></p>
                   
             </form>
        </div>
    </div>
  )
}

export default Login2
