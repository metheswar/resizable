import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-select-lists',
  templateUrl: './select-lists.component.html',
  styleUrls: ['./select-lists.component.css']
})
export class SelectListsComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }
}