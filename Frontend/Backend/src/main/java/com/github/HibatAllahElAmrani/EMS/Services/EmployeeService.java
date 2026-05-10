package com.github.HibatAllahElAmrani.EMS.Services;

import com.github.HibatAllahElAmrani.EMS.DTOs.EmployeeDTO;
import com.github.HibatAllahElAmrani.EMS.EmployeeManagementApplication;

import java.util.List;

public interface EmployeeService {
    EmployeeDTO createEmployee(EmployeeDTO employeeDTO);

    EmployeeDTO getEmployeeById(Long employeeId);

    List<EmployeeDTO> getAllEmployees();

    EmployeeDTO updateEmployee(Long employeeId, EmployeeDTO updatedEmployee);

    void deleteEmployee(Long employeeId);

}
