import { Injectable } from '@angular/core';
import { Item } from 'src/app/models/items';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  url: string = 'http://localhost:3000/items/';
  httpOptions = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  items: Item[] = [
    {
      id: 0,
      title: 'manzana',
      price: 5.4,
      quantity: 4,
      completed: false
    },
    {
      id: 1,
      title: 'pan',
      price: 3.8,
      quantity: 2,
      completed: true
    }
  ];

  constructor(private http: HttpClient) { }

  getItems(): Observable<Item[]> {
    //return this.items;
    return this.http.get<Item[]>(this.url);
  }

  addItem(newItem: Item): Observable<Item> {
    //this.items.unshift(newItem);
    return this.http.post<Item>(this.url, newItem, this.httpOptions)
  }

  toggleItem(oneItem: Item): Observable<Item> {
    return this.http.put<Item>(this.url + oneItem.id, oneItem, this.httpOptions)
    console.log('toggle')
  }

  deleteItem(oneItem: Item): Observable<Item> {
    return this.http.delete<Item>(this.url + oneItem.id)
  }
}
