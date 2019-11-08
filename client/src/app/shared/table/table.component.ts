import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() dataSource: any;
  @Output() viewItem: EventEmitter<any> = new EventEmitter<any>();

  displayedColumns: string[] = ['category', 'brand', 'created'];

  constructor() { }

  ngOnInit() {
  }

  selectItem(row) {
    if (this.viewItem) {
      this.viewItem.emit(row);
    }
  }
}
