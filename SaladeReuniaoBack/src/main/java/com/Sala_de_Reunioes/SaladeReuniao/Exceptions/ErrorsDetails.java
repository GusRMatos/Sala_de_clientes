package com.Sala_de_Reunioes.SaladeReuniao.Exceptions;

import lombok.*;

import java.util.Date;

@AllArgsConstructor
@Builder
@Getter
@NoArgsConstructor
public class ErrorsDetails {

    private Date timestamp;
    private String message;
    private String details;
}
