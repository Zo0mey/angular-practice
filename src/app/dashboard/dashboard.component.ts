import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  createTask() :void {
    //TODO actually create a task
    console.log("creating Task");
  }

  createHorizonal() :void {
    //TODO actually create a horizontal part
    console.log("creating Horizontal");
  }

}
