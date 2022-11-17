import { Component, OnInit } from '@angular/core';
import booksArray from './books.array';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  books: any[] = booksArray;
  showBooks = false;

  constructor() {}

  ngOnInit(): void {}

  toggleShowBooks(): void {
    this.showBooks = !this.showBooks;
    console.log('Log: running', this.showBooks);
  }
}
