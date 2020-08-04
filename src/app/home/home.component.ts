import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

//  sliderImages: any = document.querySelectorAll('.slide');
//  arrowLeft = document.querySelector('#arrow-left');
//  arrowRight = document.querySelector('#arrow-right');
//  current = 0;

  constructor(private myElement: ElementRef) { }

  ngOnInit(): void {
  }

// // Clear all images
//  reset() {
//   // tslint:disable-next-line: prefer-for-of
//   for (let i = 0; i < this.sliderImages.length; i++) {
//       this.sliderImages [i].style.display = 'none';
//   }
// }

// // Init slider

//  startSlider() {
//   reset();
//   this.sliderImages[0].style.display = 'block';
// }

// // Show previous
//  slideLeft() {
//   reset();
//   this.sliderImages[this.current - 1].style.display = 'block';
//   this.current--;
// }

// // Show next
//  slideRight() {
//   reset();
//   this.sliderImages[this.current + 1].style.display = 'block';
//   this.current++;
// }


// // left arrow click
// this.arrowLeft.addEventListener('click', function () {
//   if (this.current === 0) {
//       this.current = this.sliderImages.length;
//   }
//   slideLeft();
// });



// // right arrow click
// arrowRight.addEventListener('click', function() {
//   if (this.current === this.sliderImages.length - 1) {
//       this.current = -1;
//   }
//   slideRight();
// });

// startSlider();

}

