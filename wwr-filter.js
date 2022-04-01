// ==UserScript==
// @name         We Work Remotely Filter
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Filter results on We Work Remotely to remove jobs that are less relevant to you
// @author       Eric Newport
// @match        https://weworkremotely.com/*
// @icon         https://www.google.com/s2/favicons?domain=weworkremotely.com
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  var filters = document.querySelectorAll('section.jobs span.title')
  for (let s of filters) {
      if (
          s.innerHTML.includes('Manager') ||
          s.innerHTML.includes('Senior') ||
          s.innerHTML.includes('Lead') ||
          s.innerHTML.includes('Sr.') ||
          s.innerHTML.includes('Sr ') ||
          s.innerHTML.includes('II') ||
          s.innerHTML.includes('Experienced') ||
          s.innerHTML.includes('Principal') ||
          s.innerHTML.includes('Architect') ||
          s.innerHTML.includes('iOS Native') ||
          s.innerHTML.includes('Android Native') ||
          s.innerHTML.includes('iOS Developer') ||
          s.innerHTML.includes('Android Developer') ||
          s.innerHTML.includes('iOS Engineer') ||
          s.innerHTML.includes('Android Engineer') ||
          s.innerHTML.includes('iOS Software Engineer') ||
          s.innerHTML.includes('Android Software Engineer') ||
          s.innerHTML.includes('Head of') ||
          s.innerHTML.includes('Director') ||
          s.innerHTML.includes('.NET') ||
          s.innerHTML.includes('.Net') ||
          s.innerHTML.includes('C#') ||
          s.innerHTML.includes('Swift') ||
          s.innerHTML.includes('Java ') ||
          s.innerHTML.includes('Kotlin') ||
          s.innerHTML.includes('Machine Learning') ||
          s.innerHTML.includes('ML') ||
          s.innerHTML.includes('Python')
      ) {
          s.parentNode.parentNode.style.display = 'none'
      }
  }

  filters = document.querySelectorAll('section.jobs span.region')
  for (let s of filters) {
      if (
          s.innerHTML.includes('Europe Only') ||
          s.innerHTML.includes('Canada Only') ||
          s.innerHTML.includes('UK Only') ||
          s.innerHTML.includes('USA Only') ||
          s.innerHTML.includes('North America Only')
      ) {
          s.parentNode.parentNode.style.display = 'none'
      }
  }

})();
