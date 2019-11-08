package com.inventory.app.server.services;

import com.inventory.app.server.models.User;

@org.springframework.stereotype.Service
public class UserService extends Service {
  public User authenticate(String username, String password) {
    return User.authenticate(username, password);
  }
}