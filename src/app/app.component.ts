import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  data: any;

  ngOnInit() {
    this.data = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Alice' },
      { id: 3, name: 'Bob' },
      { id: 4, name: 'Emma' },
      { id: 5, name: 'Michael' },
      { id: 6, name: 'Sophia' },
      { id: 7, name: 'William' },
      { id: 8, name: 'Olivia' },
      { id: 9, name: 'James' },
      { id: 10, name: 'Emily' },
      { id: 11, name: 'Alexander' },
      { id: 12, name: 'Charlotte' },
      { id: 13, name: 'Daniel' },
      { id: 14, name: 'Ava' },
      { id: 15, name: 'Matthew' },
      { id: 16, name: 'Amelia' },
      { id: 17, name: 'David' },
      { id: 18, name: 'Mia' },
      { id: 19, name: 'Joseph' },
      { id: 20, name: 'Ella' }
    ];
  }
}
