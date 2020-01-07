const timeDuration = document.querySelector("#time");
const playButton = document.querySelector("#play");
const pauseButton = document.querySelector("#pause");
const circleEl = document.querySelector("circle");

const perimeter = circleEl.getAttribute("r") * 2 * Math.PI;
circleEl.setAttribute("stroke-dasharray", perimeter);

let duration;
const clock1 = new Timer(timeDuration, playButton, pauseButton, {
  onStart(totalTimeDuration) {
    console.log("timer start");
    duration = totalTimeDuration;
  },
  onTick(timeRemaining) {
    // console.log("on tick", this);
    circleEl.setAttribute(
      "stroke-dashoffset",
      (perimeter * timeRemaining) / duration - perimeter
    );
  },
  onComplete() {
    console.log("onComplete");
  }
});
