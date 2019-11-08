package com.inventory.app.server.fetchers;

import com.inventory.app.server.CategoryNotFoundException;
import com.inventory.app.server.ItemNotFoundException;
import com.inventory.app.server.models.Category;
import com.inventory.app.server.models.Item;
import com.inventory.app.server.services.ItemService;
import com.inventory.app.server.services.UserService;
import com.inventory.app.server.utils.ListOpts;
import graphql.schema.DataFetcher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Map;

@Component
public class ItemDataFetcher extends BaseDataFetcher {
  @Autowired
  ItemService itemService;

  @Autowired
  UserService userService;

  public DataFetcher addItem() {
    return dataFetchingEnvironment -> {
      Map<String, String> args = dataFetchingEnvironment.getArgument("input");

      try {
        Item item = new Item()
          .withCategory(Category.fromString(args.get("category")))
          .withBrand(args.get("brand"))
          .withDescription(args.get("description"));

        return itemService.create(item);
      }
      catch(CategoryNotFoundException ex) {
        dataFetchingEnvironment.getExecutionContext().addError(ex);
        return null;
      }
    };
  }

  public DataFetcher updateItem() {
    return dataFetchingEnvironment -> {
      Map<String, Object> args = dataFetchingEnvironment.getArgument("input");

      itemService.get(args.get("id").toString()).orElseGet(() -> {
        dataFetchingEnvironment.getExecutionContext().addError(new ItemNotFoundException());
        return null;
      });

      if(dataFetchingEnvironment.getExecutionContext().getErrors().isEmpty()) {
        return itemService.get(args.get("id").toString())
          .map(i ->
            itemService.update(
              i
                .withCategory(Category.fromString(args.get("category").toString()))
                .withBrand(args.get("brand").toString())
                .withDescription(args.get("description").toString())
                .withSold((boolean) args.get("sold"))
            )
          ).orElseGet(() -> {
            dataFetchingEnvironment.getExecutionContext().addError(new ItemNotFoundException());
            return null;
          });
      }
      else
        return null;
    };
  }

  public DataFetcher getItem() {
    return dataFetchingEnvironment -> {
      String id = dataFetchingEnvironment.getArgument("id");
      return itemService.get(id).orElse(null);
    };
  }

  public DataFetcher listItems() {
    return dataFetchingEnvironment -> itemService.listByFlag(
      ListOpts.DEFAULT,
      dataFetchingEnvironment.getArgument("sold")
    );
  }

  public DataFetcher listAllItems() {
    return dataFetchingEnvironment -> itemService.list(
      ListOpts.DEFAULT
    );
  }
}
