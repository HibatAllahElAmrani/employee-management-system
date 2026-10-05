package com.github.HibatAllahElAmrani.EMS.DTOs;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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
}
