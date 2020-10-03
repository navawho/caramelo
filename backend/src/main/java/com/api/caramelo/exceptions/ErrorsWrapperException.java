package com.api.caramelo.exceptions;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class ErrorsWrapperException extends RuntimeException {
    private final List<String> errors = new ArrayList<>();

    public void addError(String error) {
        this.errors.add(error);
    }

    public void addErrors(List<String> errors) {
        this.errors.addAll(errors);
    }

    public Boolean hasSomeError() {
        return !errors.isEmpty();
    }
}
