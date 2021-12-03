package com.sijan.repo;

import com.sijan.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
public interface EmployeeRepo extends JpaRepository<Employee, Long> {
}
