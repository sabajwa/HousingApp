import { Component, OnInit } from "@angular/core";
<<<<<<< HEAD
import { HttpClient } from "@angular/common/http";
=======
>>>>>>> bdb86bf58baf3a8b16a4902af7d0594d25a98c9d

@Component({
  selector: "app-property-list",
  templateUrl: "./property-list.component.html",
<<<<<<< HEAD
  styleUrls: ["./property-list.component.css"],
})
export class PropertyListComponent implements OnInit {
  properties: Array<any>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get("data/properties.json")
      .subscribe((data) => console.log(data));
  }
=======
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
>>>>>>> bdb86bf58baf3a8b16a4902af7d0594d25a98c9d
}
