package com.sijan.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException{

    private String resource;

    public ResourceNotFoundException(String resource) {
        super(String.format("%s Resource not found exception",resource));
        this.resource = resource;
    }

    public String getResource(){
        return resource;
    }
}
