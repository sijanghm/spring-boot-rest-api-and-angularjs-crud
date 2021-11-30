package com.sijan.service;

import com.sijan.exception.ResourceNotFoundException;
import com.sijan.model.Employee;
import com.sijan.repo.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class EmployeeService {



    private EmployeeRepo employeeRepo;
    @Autowired
    public EmployeeService(EmployeeRepo employeeRepo){
        this.employeeRepo = employeeRepo;
    }

    public Employee addEmployee(Employee employee){
        return employeeRepo.save(employee);
    }

    public List<Employee> findAllEmployee(){
        return employeeRepo.findAll();
    }

    public Employee findEmployeeById(Long id){
        return employeeRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not found"));
    }


    public Employee updateEmployee(Employee employee, Long id){
        Employee existingEmployee = employeeRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not found"));
        existingEmployee.setName(employee.getName());
        existingEmployee.setAddress(employee.getAddress());
        employeeRepo.save(existingEmployee);
        return existingEmployee;
    }

    public void deleteEmployee(Long id){
        employeeRepo.deleteById(id);
    }
}
