package com.github.HibatAllahElAmrani.EMS.Repositories;

import com.github.HibatAllahElAmrani.EMS.Entities.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
