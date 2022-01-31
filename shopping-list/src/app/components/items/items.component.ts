import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/items'
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];
  total: number = 0;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    //this.items = this.itemService.getItems();
    this.itemService.getItems().subscribe(data => {
      this.items = data;
      this.getTotal();
    })
  }

  deleteItem(oneItem: Item) {
    this.items = this.items.filter(item => item.id !== oneItem.id);
    this.itemService.deleteItem(oneItem).subscribe();
    this.getTotal();
  }

  toggleItem(oneItem: Item) {
    this.itemService.toggleItem(oneItem).subscribe();
    this.getTotal();
  }

  getTotal() {
    this.total = this.items
                .filter(item => !item.completed)
                .map(item => item.price * item.quantity)
                .reduce((acc, item) => acc += item, 0);
  }

}
