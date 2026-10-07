import React, { useEffect, useState } from 'react'
import { createEmployee, getEmployee, updateEmployee} from '../services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';

function Employee() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');
  const [hireDate, setHireDate] = useState('');
  const [salary, setSalary] = useState('');


  const {id} = useParams();

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    position: '',
    hireDate: '',
    salary: ''
  });

  const navigator = useNavigate();

  useEffect(() => {
    if(id){
      getEmployee(id)
        .then((response) => {
          setFirstName(response.data.firstName);
          setLastName(response.data.lastName);
          setEmail(response.data.email);
          setPosition(response.data.position || '');
          setHireDate(response.data.hireDate || '');
          setSalary(response.data.salary != null ? String(response.data.salary) : '');
        })
        .catch((err) => {
          console.error(err);
        })
    }
  },[id]); 

  function saveOrUpdateEmployee(event){
    event.preventDefault();
    
    if (validateForm()){
      const employee = {firstName, lastName, email, position, hireDate, salary};

      if(id){
        updateEmployee(id, employee)
          .then((response) => {
            navigator('/employees');
          })
          .catch((err) => {
            console.error('Failed to update employee : ', err);
          });
      } else {
        createEmployee(employee)
          .then((response) => {
          console.log(response.data);
          navigator('/employees');
        })
        .catch((err) => {
          console.error('Failed to create employee : ', err);
        });
      } 
    }
  }

  function validateForm(){
    let valid = true;

    const errorsCopy = {... errors};

    if(firstName.trim()){
      errorsCopy.firstName = '';
    } else {
      errorsCopy.firstName = 'First name is required';
      valid = false;
    }

    if(lastName.trim()){
      errorsCopy.lastName = '';
    } else {
      errorsCopy.lastName = 'Last name is required';
      valid = false;
    }

    if(email.trim()){
      errorsCopy.email = '';
    } else {
      errorsCopy.email = 'Email is required';
      valid = false;
    }

    if(position.trim()){
      errorsCopy.position = '';
    } else {
      errorsCopy.position = 'Position is required';
      valid = false;
    }

    if(hireDate.trim()){
      errorsCopy.hireDate = '';
    } else {
      errorsCopy.hireDate = 'Hire date is required';
      valid = false;
    }

    if(salary.trim()){
      errorsCopy.salary = '';
    } else {
      errorsCopy.salary = 'Salary is required';
      valid = false;
    }

    setErrors(errorsCopy);

    return valid;
  }

  function pageTitle(){
    if(id){
      return <h2 className='text-center mt-4'> Update Employee</h2>;
    } else {
      return <h2 className='text-center mt-4'> Add Employee</h2>;
    }
  }


  return (
    <div className='container mt-4'>
      <br/>
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          {
            pageTitle()
          }
          <div className='card-body'>
            <form onSubmit={saveOrUpdateEmployee}>
              <div className='form-group mb-2'>
                <label className='form-label'>First Name:</label>
                <input 
                  type='text'
                  placeholder='Enter employee first name'
                  name='firstName'
                  value={firstName}
                  className= {`form-control ${errors.firstName ? 'is-invalid': ''}`}
                  onChange={(e) => setFirstName(e.target.value)}
                ></input>
                { errors.firstName && <div className='invalid-feedback'> { errors.firstName } </div> }

                <label className='form-label mt-2'>Last Name:</label>
                <input 
                  type='text'
                  placeholder='Enter employee last name'
                  name='lastName'
                  value={lastName}
                  className={`form-control ${errors.lastName ? 'is-invalid': ''}`}
                  onChange={(e) => setLastName(e.target.value)}
                ></input>
                { errors.lastName && <div className='invalid-feedback'> { errors.lastName } </div> }

                <label className='form-label mt-2'>Email:</label>
                <input 
                  type='email'
                  placeholder='Enter employee email'
                  name='email'
                  value={email}
                  className={`form-control ${errors.email ? 'is-invalid': ''}`}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                { errors.email && <div className='invalid-feedback'> { errors.email } </div> }

                <label className='form-label mt-2'>Position:</label>
                <input 
                  type='text'
                  placeholder='Enter employee position'
                  name='position'
                  value={position}
                  className={`form-control ${errors.position ? 'is-invalid': ''}`}
                  onChange={(e) => setPosition(e.target.value)}
                ></input>
                { errors.position && <div className='invalid-feedback'> { errors.position } </div> }

                <label className='form-label mt-2'>Hire date:</label>
                <input 
                  type='date'
                  name='hireDate'
                  value={hireDate}
                  className={`form-control ${errors.hireDate ? 'is-invalid': ''}`}
                  onChange={(e) => setHireDate(e.target.value)}
                ></input>
                { errors.hireDate && <div className='invalid-feedback'> { errors.hireDate } </div> }

                <label className='form-label mt-2'>Salary:</label>
                <input 
                  type='number'
                  placeholder='Enter employee salary'
                  name='salary'
                  value={salary}
                  className={`form-control ${errors.salary ? 'is-invalid': ''}`}
                  onChange={(e) => setSalary(e.target.value)}
                ></input>
                { errors.salary && <div className='invalid-feedback'> { errors.salary } </div> }

              </div>

              <button className='btn btn-success' type='submit' >Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Employee