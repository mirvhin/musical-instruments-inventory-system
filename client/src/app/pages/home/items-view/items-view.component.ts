import { ItemModel } from './../../../models/item';
import { Category } from './../../../models/category';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-items-view',
  templateUrl: './items-view.component.html',
  styleUrls: ['./items-view.component.scss']
})
export class ItemsViewComponent implements OnInit {
  itemForm: FormGroup;
  CATEGORY = Category;
  CATEGORY_KEYS = Object.keys(Category);
  isFormReady = false;
  isSold = false;

  item: any;

  constructor(
    private aRoute: ActivatedRoute,
    private builder: FormBuilder,
    private dialog: MatDialog,
    private router: Router,
    private itemService: ItemService,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit() {
    this.getItem();
  }

  buildForm() {
    this.itemForm = this.builder.group({
      category: [this.item.category, [
        Validators.required
      ]],
      brand: [this.item.brand, [
        Validators.required
      ]],
      description: [this.item.description, [
        Validators.required
      ]],
      sold: [this.item.sold, []]
    });

    this.isFormReady = true;
  }

  getItem() {
    this.aRoute.params.subscribe((data: any) => {
      this.itemService.get(data.id).then((res: any) => {
        this.item = res.data.item;
        this.isSold = this.item.sold;
        console.log(this.item);

        this.buildForm();
      });
    });
  }

  goTo(path) {
    this.router.navigate([path]);
  }

  setSold() {
    this.isSold = !this.isSold;
  }

  updateItem() {
    if (this.itemForm.valid) {
      this.itemService.update({
        id: this.item.id,
        ...this.itemForm.value,
        sold: this.isSold
      } as ItemModel).then((res: any) => {
        this.snackbar.open('Successfully updated an item!', 'Close', {
          duration: 2000,
          verticalPosition: 'top'
        });
      });
    }
  }

  get category() {
    return this.itemForm.get('category');
  }

  get brand() {
    return this.itemForm.get('brand');
  }

  get description() {
    return this.itemForm.get('description');
  }
}
