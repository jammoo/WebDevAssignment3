import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
  sname = "James Bhagoutie";
  sid = 991554085;
  date = new Date();
  year = this.date.getFullYear();
  months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  month = this.months[this.date.getMonth()];
  day = this.date.getDate();
  //footer = "<i>John Smith student Id 999992342 </i><b>Sheridan College&nbsp;&nbsp;<span class='hart'>&#9825;</span>&nbsp;&nbsp;";
    //$("body").append("<footer></footer>");
    //$("footer")
    //    .html("<i>John Smith student Id 999992342 </i><b>Sheridan College&nbsp;&nbsp;<span class='hart'>&#9825;</span>&nbsp;&nbsp;")
    //    .append(`${month} ${day}, ${year}`);

  ngOnInit(): void {
  }

}
