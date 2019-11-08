package com.inventory.app.server.utils;

import java.time.*;

public class DateUtils {
  public static LocalDateTime utcNow() {
    return OffsetDateTime.now(ZoneId.of("UTC")).toLocalDateTime();
  }
}
