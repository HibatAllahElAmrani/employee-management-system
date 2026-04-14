import { useEffect, useState } from "react";
import { listEmployees } from "../services/EmployeeService";

function EmployeesList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    listEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="container table-responsive" style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
      marginTop: '50px' 
    }}>
      <h2 className="text-center employees-title"> Employees </h2>

      <table className="table table-bordered table-striped">
        <thead>
          <tr className="table-success">
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
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
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeesList;
