package com.github.HibatAllahElAmrani.EMS.Mapper;

import com.github.HibatAllahElAmrani.EMS.DTOs.EmployeeDTO;
import com.github.HibatAllahElAmrani.EMS.Entities.Employee;

public class EmployeeMapper {

    //map employee Entity to employee DTO
    public static EmployeeDTO mapToEmployeeDto(Employee employee){
        return new EmployeeDTO(
                employee.getId(),
                employee.getFirstName(),
                employee.getLastName(),
                employee.getEmail()
        );
    }

    //map employee DTO to employee Entity
    public static Employee mapToEmployee(EmployeeDTO employeeDTO){
        return new Employee(
                employeeDTO.getId(),
                employeeDTO.getFirstName(),
                employeeDTO.getLastName(),
                employeeDTO.getEmail()
        );
    }
}
