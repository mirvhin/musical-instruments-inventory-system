package com.inventory.app.server.services;

import com.inventory.app.server.jpa.JPAUtil;

import java.util.function.*;

public abstract class Service {
  public static <T> T transaction(Supplier<T> closure) {
    return JPAUtil.transaction(closure);
  }

  public void transaction(Runnable closure) {
    JPAUtil.transaction(closure);
  }
}