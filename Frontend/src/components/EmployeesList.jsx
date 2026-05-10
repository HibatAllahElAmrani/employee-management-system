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
      <table className="table table-bordered table-striped">
        <thead>
          <tr className="table-success">
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => {
            return (
              <tr className="table-success" key={employee.id}>
                <td className="table-secondary">{employee.id}</td>
                <td className="table-secondary">{employee.firstName}</td>
                <td className="table-secondary">{employee.lastName}</td>
                <td className="table-secondary">{employee.email}</td>
                <td
                className="table-secondary">
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
