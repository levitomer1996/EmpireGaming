import { Component, OnInit } from "@angular/core";
import { SalesService } from "../../../services/sales.service";
import { Sale } from "../../../models/sale";

@Component({
  selector: "app-sales",
  templateUrl: "./sales.component.html",
  styleUrls: ["./sales.component.css"]
})
export class SalesComponent implements OnInit {
  sales: Sale[];
  images = [944, 1011, 984].map(n => `https://picsum.photos/id/${n}/900/500`);
  constructor(public ss: SalesService) {}

  ngOnInit() {
    this.ss.getSales().subscribe(sales => {
      this.sales = sales;
      console.log(sales);
    });
  }
}
