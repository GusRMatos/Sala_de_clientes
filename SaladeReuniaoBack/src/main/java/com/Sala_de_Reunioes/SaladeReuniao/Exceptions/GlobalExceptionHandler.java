package com.Sala_de_Reunioes.SaladeReuniao.Exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

import java.util.Date;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<?> resourceNotFoundException(ResourceNotFoundException ex, WebRequest request){
        ErrorsDetails errorsDetails = new ErrorsDetails(new Date(), ex.getMessage(), request.getDescription(false));
        return new ResponseEntity<>(errorsDetails, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<?>globalExceptionHandler(Exception ex, WebRequest request){
        ErrorsDetails errorsDetails = new ErrorsDetails(new Date(), ex.getMessage(), request.getDescription(false));
        return new ResponseEntity<>(errorsDetails, HttpStatus.INTERNAL_SERVER_ERROR);
    }

}
