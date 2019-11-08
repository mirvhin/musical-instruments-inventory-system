package com.inventory.app.server.models;

import com.inventory.app.server.CategoryNotFoundException;

public enum Category {
  BOWED_STRINGS("Bowed Strings"),
  WOOD_WIND("Wood Wind"),
  BRASS("Brass"),
  PERCUSSION("Percussion"),
  KEYBOARD("Keyboard"),
  GUITAR("Guitar"),
  OTHERS("Others");

  private final String value;
  Category(String value) { this.value = value; }
  public String getText() {
    return this.value;
  }

  public static Category fromString(String text) {
    for (Category t: Category.values()) {
      if(t.value.equalsIgnoreCase(text))
        return t;
    }

    throw new CategoryNotFoundException();
  }
}
