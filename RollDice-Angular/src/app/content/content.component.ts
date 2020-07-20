import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }
  num = Math.floor((Math.random() * 5) + 1);
  sideName = "assets/images/dice/side_" + this.num + ".png";
  newNum();
  newNum() {
    this.num = Math.floor((Math.random() * 5) + 1);
    this.sideName = "assets/images/dice/side_" + this.num + ".png";
  };
  ngOnInit(): void {
  }

}
