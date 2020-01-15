class Carousel {
  constructor(carousel) {
    this.carousel = carousel;
    this.roller = this.carousel.querySelector('.carousel-roller');
    this.itemsAmount = this.roller.children.length;
    this.frameWidth = this.carousel.clientWidth;
    this.sideControls = this.carousel.querySelectorAll('.side-control');
    this.bottomControlContainer = this.carousel.querySelector('.control-bottom');
    this.currentSlideIndex = 0;
    this.scrollPos = 0;

    // Assign width to each items equal to frame's width.
    for (const item of this.roller.children) item.style.width = `${this.frameWidth}px`;
    // The item container/roller will need a width as wide as the total of all items' width.
    this.roller.style.width = this.frameWidth * this.itemsAmount + 'px';
    // Assign event to side controls.
    for (const control of this.sideControls)
      control.addEventListener('click', e => this.slideOnce(e));

    // Generating bottom control based on the amount of item.
    for (let index = 0; index < this.itemsAmount; index++) {
      this.bottomControlContainer.appendChild(
        elt(
          'li',
          {
            class: this.currentSlideIndex === index ? 'item-control active' : 'item-control',
            'data-index': index
          },
          ''
        )
      );
    }
    this.bottomControls = this.bottomControlContainer.children;
    // Assign click event on bottom control container.
    this.bottomControlContainer.addEventListener('click', e => this.slideTo(e));
  }

  slideOnce(event) {
    let slideButton = event.target;
    // Right slide control.
    if (slideButton.className.includes('control-right')) {
      // If right control is clicked and the last slide is active.
      if (this.currentSlideIndex + 1 >= this.itemsAmount) {
        // Reset to the first slide.
        this.bottomControlActiveSwitch(0);
        this.moveSlideAndUpdate(0, 0);
      } else {
        // Else, slide once to the right.
        let scrollAmount = this.scrollPos - this.frameWidth;
        this.bottomControlActiveSwitch(this.currentSlideIndex + 1);
        this.moveSlideAndUpdate(this.currentSlideIndex + 1, scrollAmount);
      }
    } else {
      // Left slide control.
      // If left control is clicked and the first slide is active.
      if (this.currentSlideIndex - 1 < 0) {
        // Go to the last item.
        let endScroll = -(this.frameWidth * (this.itemsAmount - 1));
        this.bottomControlActiveSwitch(this.itemsAmount - 1);
        this.moveSlideAndUpdate(this.itemsAmount - 1, endScroll);
      } else {
        // Else, slide once to the left.
        let scrollAmount = this.scrollPos + this.frameWidth;
        this.bottomControlActiveSwitch(this.currentSlideIndex - 1);
        this.moveSlideAndUpdate(this.currentSlideIndex - 1, scrollAmount);
      }
    }
  }

  slideTo(event) {
    event.stopPropagation();
    let button = event.target;
    if (button.tagName !== 'LI') return;
    let buttonIndex = button.dataset.index;
    let scrollPos = -(this.frameWidth * buttonIndex);

    this.bottomControlActiveSwitch(buttonIndex);
    this.moveSlideAndUpdate(buttonIndex, scrollPos);
  }

  moveSlideAndUpdate(nextIndex, nextScroll) {
    // Move the slide.
    this.roller.style.transform = `translateX(${nextScroll}px)`;

    // Update the state.
    this.currentSlideIndex = nextIndex;
    this.scrollPos = nextScroll;
  }

  bottomControlActiveSwitch(nextIndex) {
    this.bottomControls[this.currentSlideIndex].classList.remove('active');
    this.bottomControls[nextIndex].classList.add('active');
  }
}

window.addEventListener('load', () => {
  new Carousel(document.querySelector('.carousel'));
});

/* ======================================================================================================== */

// SANDBOX
// let carousel = document.querySelector('.carousel');
// let roller = document.querySelector('.carousel-roller');
// let rollItem = roller.children[0];
// let rollPos = 0;

// Translate version
// for (const item of roller.children) item.style.width = `${carousel.clientWidth}px`;
// roller.style.width = Array.from(roller.children).reduce((a, c) => a + c.clientWidth, 0) + 'px';
// roller.style.transform = 'translateX(-300px)';
// setInterval(() => {
//   let nextPos = rollPos + rollItem.clientWidth;

//   if (nextPos >= roller.scrollWidth) {
//     roller.style.transform = '';
//     rollPos = 0;
//   } else {
//     roller.style.transform = `translateX(-${rollPos + rollItem.clientWidth}px`;
//     rollPos += rollItem.clientWidth;
//   }
// }, 2000);
