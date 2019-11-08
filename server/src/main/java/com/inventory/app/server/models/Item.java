package com.inventory.app.server.models;

import com.inventory.app.server.jpa.Repository;
import com.inventory.app.server.utils.ListOpts;
import com.inventory.app.server.utils.PagedList;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.util.*;
import javax.persistence.criteria.Predicate;

@Entity
@Table(name = "[item]")
public class Item extends Model {
  private static final Repository<Item> repo = new Repository<>(Item.class);

  @Column
  @Enumerated(EnumType.STRING)
  private Category category;

  @Column(nullable = false, columnDefinition = "varchar(255)")
  @NotNull
  @Size(min = 1, max = 255)
  @NotBlank
  private String brand;

  @Column(nullable = false, columnDefinition = "varchar(255)")
  @NotNull
  @Size(min = 1, max = 1024)
  @NotBlank
  private String description;

  @Column(nullable = false)
  private Boolean sold = false;

  public String getIsSold() {
    return category.getText();
  }

  public void setIsSold(Boolean sold) {
    this.sold = sold;
  }

  public Item withSold(Boolean sold) {
    setIsSold(sold);
    return this;
  }

  public String getCategory() {
    return category.getText();
  }

  public void setCategory(Category category) {
    this.category = category;
  }

  public Item withCategory(Category category) {
    setCategory(category);
    return this;
  }

  public String getBrand() {
    return brand;
  }

  public void setBrand(String brand) {
    this.brand = brand;
  }

  public Item withBrand(String brand) {
    setBrand(brand);
    return this;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public Item withDescription(String desc) {
    setDescription(desc);
    return this;
  }

  public static Optional<Item> get(String id) {
    return repo.get(id);
  }

  public static PagedList<Item> list(ListOpts opts) {
    return repo.list(opts);
  }

  public static PagedList<Item> listByFlag(ListOpts opts, Boolean sold) {
    return repo.filter(opts, (crit, path) -> {
      List<Predicate> criteria = new ArrayList<>();
      criteria.add(
        crit.equal(path.get("sold"), sold)
      );

      return crit.or(criteria.toArray(new Predicate[0]));
    });
  }
}
