import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Item } from 'src/app/models/items';

@Component({
  selector: 'app-one-item',
  templateUrl: './one-item.component.html',
  styleUrls: ['./one-item.component.css']
})
export class OneItemComponent implements OnInit {

  @Input() oneItem: Item = new Item();
  @Output() deleteItem: EventEmitter<Item> = new EventEmitter();
  @Output() toggleItem: EventEmitter<Item> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(oneItem: Item) {
    this.deleteItem.emit(oneItem);
  }

  onToggle(oneItem: Item) {
    oneItem.completed = !oneItem.completed;
    this.toggleItem.emit(oneItem);
  }

}
