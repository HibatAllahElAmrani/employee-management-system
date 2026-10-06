package com.github.HibatAllahElAmrani.EMS.DTOs;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class EmployeeDTO {

    private Long id;

    @NotBlank(message = "The first name cannot be blank !")
    private String firstName;

    @NotBlank(message = "The last name cannot be blank !")
    private String lastName;

    @Email(message = "The email format is invalid !")
    @NotBlank(message = "The email cannot be blank !")
    private String email;

    @NotBlank(message = "The position cannot be blank !")
    private String position;

    @NotNull(message = "A hiring date is required !")
    private LocalDate hireDate;

    @NotNull(message = "The salary is required !")
    @Positive(message = "The salary must be positive !")
    private BigDecimal salary;

    //@NotNull(message = "A department is required !")
    //private Department department;
}
