import React, {useState} from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Validation from '../../SignupValidation'; 
import axios from 'axios'


function RegisterPage() {
    const [values, setValues] = useState({
        name:'',
        email: '',
        password: ''
    
      })
      const navigate = useNavigate();
      const [errors, setErrors] = useState({})
      const handleInput =(event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
      }
      const handleSubmit =(event) => {
        event.preventDefault();
        setErrors(Validation(values));  
        if(errors.name === "" && errors.email === "" && errors.password === "") {
            axios.post('http://localhost:8081/signup', values) 
            .then(res => {
                navigate('/');
            })
            .catch(err => console.log(err));
        }
      }
  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
      <div className='bg-dark text-white p-3 rounded w-25' >
       <strong> <h2>Sign Up</h2></strong>
        <form action="" onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor="name"><strong>Name</strong></label>
                <input type="name" placeholder='Enter name' name='name'
                 onChange={handleInput} className='form-control rounded-0'></input>
                 {errors.name &&<span className='text-danger'> {errors.name}</span>}
            </div>
            <div className='mb-3'>
                <label htmlFor="email"><strong>email</strong></label>
                <input type='email' placeholder='Enter email' name='email'
                onChange={handleInput} className='form-control rounded-0'></input>
                {errors.email &&<span className='text-danger'> {errors.email}</span>}
            </div>
            <div className='mb-3'>
                <label htmlFor="password"><strong>Confirm</strong></label>
                <input type='password' placeholder='Confirm Password' name='password'
                onChange={handleInput} className='form-control rounded-0'></input>
                {errors.password &&<span className='text-danger'> {errors.password}</span>}
            </div>
            
            <button type='submit' className='btn btn-success w-100'>Register</button>
            <p>Do you already have an Account? <Link to="/">Log In</Link></p>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
