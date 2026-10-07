import '../App.css'
import { useEffect, useState } from "react";
import { deleteEmployee, listEmployees } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";


function EmployeesList() {
  const [employees, setEmployees] = useState([]);

  const navigator = useNavigate();

  useEffect(() => {
    getAllEmployees();
  }, []);

  function getAllEmployees() {
    listEmployees()
    .then((response) => {
      setEmployees(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
  }

  function addNewEmployee(){
    navigator('/add-employee')
  }

  function updateEmployee(employeeId){
    navigator(`/edit-employee/${employeeId}`)
  }

  function removeEmployee(id){
    deleteEmployee(id)
      .then(() => {
        setEmployees(prevEmployees => prevEmployees.filter(employee => employee.id !== id));
      })
      .catch(err => {
        console.error('Failed to delete employee : ', err);
      });
  }

  return (
    <div className="container table-responsive" style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
      marginTop: '50px' 
    }}>

      <h2 className="text-center employees-title"> Employees </h2>

      <button className="btn btn-dark mb-2
      " onClick={addNewEmployee}> Add Employee </button>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Position</th>
            <th>Hire Date</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => {
            return (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{employee.position}</td>
                <td>{employee.hireDate}</td>
                <td>{employee.salary}</td>
                <td
                >
                  <button className="btn-custom"
                  onClick={() => updateEmployee(employee.id)}>
                    Update
                  </button>
                  <button className="btn-custom1"
                  onClick={() => removeEmployee(employee.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeesList;
