class Timer {
  constructor(timeDuration, playButton, pauseButton, callbacks) {
    this.timeDuration = timeDuration;
    this.playButton = playButton;
    this.pauseButton = pauseButton;
    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
      // this.onComplete = onComplete;
    }

    this.playButton.addEventListener("click", this.start);
    this.pauseButton.addEventListener("click", this.pause);
  }
  start = () => {
    if (this.onStart) {
      this.onStart(this.timeRemaining);
    }
    this.tick();
    this.intervalId = setInterval(this.tick, 20);
  };
  tick = () => {
    if (!this.timeRemaining) {
      this.pause();
      if (this.onComplete) {
        this.onComplete();
      }
    } else {
      this.timeRemaining -= 0.02;
      if (this.onTick) {
        this.onTick(this.timeRemaining);
      }
    }
  };

  get timeRemaining() {
    return parseFloat(this.timeDuration.value);
  }

  set timeRemaining(time) {
    this.timeDuration.value = time.toFixed(2);
  }

  pause = () => {
    clearInterval(this.intervalId);
  };
}
