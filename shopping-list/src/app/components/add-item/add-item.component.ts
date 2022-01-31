import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/items';
import { ItemService } from 'src/app/services/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  id: number = Date.now();
  title: string = '';
  price: number = 0;
  quantity: number = 0;

  constructor(private itemService: ItemService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const newItem = new Item;
    newItem.id = this.id;
    newItem.title = this.title;
    newItem.price = this.price;
    newItem.quantity = this.quantity;
    newItem.completed = false;

    //this.itemService.addItem(newItem);
    this.itemService.addItem(newItem).subscribe(i => {
      this.router.navigate(['/']);
    });
  }

}
