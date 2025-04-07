import { AfterViewInit, Component } from '@angular/core';
import Swiper from 'swiper';


@Component({
  selector: 'app-slider',
  standalone: false,
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent implements AfterViewInit{

  ngAfterViewInit(): void {
    new Swiper('#heroSlider1', {
      effect: 'fade',
      slidesPerView: 1,
      autoHeight: true
    });
  }

}
