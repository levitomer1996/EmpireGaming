import { Component, OnInit, ViewChild } from "@angular/core";
import {
  NgbCarousel,
  NgbSlideEvent,
  NgbSlideEventSource
} from "@ng-bootstrap/ng-bootstrap";
import { Sale } from "../../../models/sale";
import { SalesService } from "../../../services/sales.service";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.css"]
})
export class CarouselComponent implements OnInit {
  sales: Sale[];
  images = [];

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;

  @ViewChild("carousel", { static: true }) carousel: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (
      this.unpauseOnArrow &&
      slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT ||
        slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
    ) {
      this.togglePaused();
    }
    if (
      this.pauseOnIndicator &&
      !slideEvent.paused &&
      slideEvent.source === NgbSlideEventSource.INDICATOR
    ) {
      this.togglePaused();
    }
  }

  // images = [944, 1011, 984].map(n => `https://picsum.photos/id/${n}/900/500`);

  constructor(public ss: SalesService) {}

  ngOnInit() {
    this.ss.getSales().subscribe(sales => {
      this.sales = sales;

      this.sales.forEach(s => {
        this.images.push({ img: s.img, name: s.name });
      });
      console.log(this.images);
    });
  }
}
