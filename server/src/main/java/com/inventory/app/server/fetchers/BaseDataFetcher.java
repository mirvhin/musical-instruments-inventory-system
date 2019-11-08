package com.inventory.app.server.fetchers;

import com.inventory.app.server.utils.StdResponse;

public class BaseDataFetcher {
  public StdResponse success() {
    return new StdResponse(
      200,
      "OK",
      "OK"
    );
  }
}
