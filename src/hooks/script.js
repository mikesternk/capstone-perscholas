import React, { useState } from "react";

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({
    left: 0,
    top: 0,
  });
}
const parallax_el = document.querySelectorAll(".parallax");
console.log(parallax_el);

let xValue = 0,
  yValue = 0;

window.addEventListener("mousemove", (e) => {
  e.preventDefault();
  // Getting the mouse location relative to center of the screen
  left = e.clientX - window.innerWidth / 2;
  top = e.clientY - window.innerHeight / 2;

  // Checking the mouse location on log
  console.log(xValue, yValue);

  parallax_el.forEach((el) => {
    el.style.transform = `translateX(calc(-50% + ${xValue}px) translateY(calc(-50% + ${yValue}px)`;
    // el.style.transform = "translateX(-50%) translateY(-50%)";
  });
});
