// Copyright (c) 2022 Ashley Monaghan All rights reserved
//
// Created by: Ashley Monaghan
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2Or-Unit-5-05/sw.js", {
    scope: "/ICS2Or-Unit-5-05/",
  })
}

/**
 * This function displays an alert.
 * Math
 */
function calculate() {
  // input
  const a = parseInt(document.getElementById("length-a").value)
  const b = parseInt(document.getElementById("length-b").value)
  const c = parseInt(document.getElementById("length-c").value)

  // process
  const angleA =
    Math.acos(
      (lengthB ** 2 + lengthC ** 2 - lengthA ** 2) / (2 * lengthB * lengthC)
    ) *
    (180 / Math.PI)
  const angleB =
    Math.acos(
      (lengthC ** 2 + lengthA ** 2 - lengthB ** 2) / (2 * lengthC * lengthA)
    ) *
    (180 / Math.PI)
  const angleC =
    Math.acos(
      (lengthA ** 2 + lengthB ** 2 - lengthC ** 2) / (2 * lengthA * lengthB)
    ) *
    (180 / Math.PI)

  const sumOfAngles =
    Number(angleA.toFixed(2)) +
    Number(angleB.toFixed(2)) +
    Number(angleC.toFixed(2))
  Number(angleB.toFixed(2)) + Number(angleC.toFixed(2))
  // output
  document.getElementById("words").innerHTML = "Numbers: " + math + " cm"
}
