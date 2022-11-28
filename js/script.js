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
  navigator.serviceWorker.register("/ICS2Or-Unit-5-05-Test/sw.js", {
    scope: "/ICS2Or-Unit-5-05-Test/",
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
  const math = a + b + c
  // output
  document.getElementById("math").innerHTML = "Numbers: " + math + " units"
}
