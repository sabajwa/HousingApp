import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-property-list",
  templateUrl: "./property-list.component.html",
  styleUrls: ["./property-list.component.css"]
})
export class PropertyListComponent implements OnInit {
  properties: Array<any> = [
    {
      Id: 1,
      Name: "Bajwa House",
      Type: "House",
      Price: 12000
    },
    {
      Id: 2,
      Name: "Friends Villa",
      Type: "Villa",
      Price: 14000
    },
    {
      Id: 3,
      Name: "White Rose",
      Type: "Banglow",
      Price: 15000
    },
    {
      Id: 4,
      Name: "Marcos Rose",
      Type: "Pent House",
      Price: 21000
    }
  ];
  constructor() {}

  ngOnInit(): void {}
}
