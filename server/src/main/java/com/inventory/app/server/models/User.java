package com.inventory.app.server.models;

import com.inventory.app.server.InvalidCredentialsException;

public class User {
    private static final String USERNAME = "root";
    private static final String PASSWORD = "root";

    private String username;

    public String getUsername() {
        return username;
    }

    public void setUsername(String arg) {
        this.username = arg;
    }

    public User withUsername(String arg) {
        setUsername(arg);
        return this;
    }

    // TODO: Improve authentication
    public static User authenticate(String username, String password) {
        if(username.equals(USERNAME) && password.equals(PASSWORD)) {
            return new User()
            .withUsername(username);
        }

        throw new InvalidCredentialsException();
    }
}