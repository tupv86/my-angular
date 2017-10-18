import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {

  arrPepole = [
    { name: 'Tu', age: 32 },
    { name: 'Giang', age: 32 },
    { name: 'Yen', age: 29 },
    { name: 'Hoan', age: 32 },
    { name: 'Thien', age: 32 }

  ]
  constructor() { }

  ngOnInit() {
  }

}
