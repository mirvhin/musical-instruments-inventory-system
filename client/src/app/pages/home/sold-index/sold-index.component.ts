import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sold-index',
  templateUrl: './sold-index.component.html',
  styleUrls: ['./sold-index.component.scss']
})
export class SoldIndexComponent implements OnInit {
  items: any[] = [];

  constructor(
    private itemService: ItemService,
    private router: Router
  ) { }

  ngOnInit() {
    this.listItems();
  }

  listItems() {
    this.itemService.listSoldItems().then((res: any) => {
      this.items = res.data.items.data;
    });
  }
}
