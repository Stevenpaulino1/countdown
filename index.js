const timeDuration = document.querySelector("#time");
const playButton = document.querySelector("#play");
const pauseButton = document.querySelector("#pause");

class Timer {
  constructor(timeDuration, playButton, pauseButton) {
    this.timeDuration = timeDuration;
    this.playButton = playButton;
    this.pauseButton = pauseButton;

    this.playButton.addEventListener("click", this.start);
    this.pauseButton.addEventListener("click", this.pause);
  }
  start = () => {
    this.tick();
    this.intervalId = setInterval(this.tick, 1000);
    console.log(this.intervalId);
  };
  tick = () => {
    // console.log(this.timeDuration.value);
    // // timeRemaining = this.timeDuration -
    // this.timeDuration.value -= 1;
    // // for (let i = this.timeDuration.value; i != 0; i--) {
    // //   this.timeDuration.value = i;
    // // }
    // this.getTimeRemaining();
    // this.setTimeRemaining();

    this.timeRemaining -= 1;
  };

  get timeRemaining() {
    return parseFloat(this.timeDuration.value);
  }

  set timeRemaining(time) {
    this.timeDuration.value = time;
  }

  pause = () => {
    console.log("PAUSE", this.intervalId);
    clearInterval(this.intervalId);
    console.log("cleared");
  };
}

const clock1 = new Timer(timeDuration, playButton, pauseButton);
