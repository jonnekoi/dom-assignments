'use strict';

const target = document.querySelector('#target');

const browserInfo = navigator.userAgent;
const browserName = browserInfo.split(' ')[0];
const osName = navigator.platform;

const screenWidth = screen.width;
const screenHeight = screen.height;
const availableWidth = screen.availWidth;
const availableHeight = screen.availHeight;

const date = new Date();
const options = {year: 'numeric', month: 'long', day: 'numeric'};

const formattedDate = date.toLocaleDateString('fi-FI', options);
const formattedTime = date.toLocaleTimeString('fi-FI').slice(0, -3);

target.innerHTML = `
  <p>Browser name and version: ${browserName}</p>
  <p>Operating system name: ${osName}</p>
  <p>Screen width and height: ${screenWidth} x ${screenHeight}</p>
  <p>Available screen space: ${availableWidth} x ${availableHeight}</p>
  <p>Current date: ${formattedDate}</p>
  <p>Current time: ${formattedTime}</p>
`;
