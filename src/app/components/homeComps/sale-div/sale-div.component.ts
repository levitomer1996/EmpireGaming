import { Component, OnInit, Input } from "@angular/core";
import { Sale } from "../../../models/sale";

@Component({
  selector: "app-sale-div",
  templateUrl: "./sale-div.component.html",
  styleUrls: ["./sale-div.component.css"]
})
export class SaleDivComponent implements OnInit {
  @Input() sale: Sale;
  constructor() {}

  ngOnInit() {
    console.log(this.sale.name);
  }
}
