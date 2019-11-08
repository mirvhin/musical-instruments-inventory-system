package com.inventory.app.server.utils;

import com.inventory.app.server.models.Model;

import java.util.*;

public class PagedList<T extends Model> extends ArrayList<T> {
  private final long total;

  public PagedList(Collection<T> seed, long total) {
    super(seed);
    this.total = total;
  }

  public long getTotal() {
    return total;
  }

  public ArrayList<T> getData() {
    return this;
  }

  @Override
  public boolean equals(Object obj) {
    return super.equals(obj);
  }

  @Override
  public int hashCode() {
    return super.hashCode();
  }
}