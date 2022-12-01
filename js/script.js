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
  const sideA = parseInt(document.getElementById("length-a").value)
  const sideB = parseInt(document.getElementById("length-b").value)
  const sideC = parseInt(document.getElementById("length-c").value)

  if {
  // process
  const angleA =
    Math.acos(
      (sideB ** 2 + sideC ** 2 - sideA ** 2) / (2 * sideB * sideC)
    ) *
    (180 / Math.PI)
  const angleB =
    Math.acos(
      (sideC ** 2 + sideA ** 2 - sideB ** 2) / (2 * sideC * sideA)
    ) *
    (180 / Math.PI)
  const angleC =
    Math.acos(
      (sideA ** 2 + sideB ** 2 - sideC ** 2) / (2 * sideA * sideB)
    ) *
    (180 / Math.PI)


  // output
  document.getElementById("words").innerHTML = "Numbers: " + math + " cm"
}
