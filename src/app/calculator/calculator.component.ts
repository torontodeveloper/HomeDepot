import { Component, OnInit } from '@angular/core';
import {User} from './../user.service'
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  userList;
  constructor(private userService:User) { }

  ngOnInit() {
    this.userList = this.userService.get().subscribe(data => {
      this.userList = data;
    });
    console.log(this.userList);
  }
  
}
