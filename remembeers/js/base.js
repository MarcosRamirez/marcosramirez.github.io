let pages = [
  "anuncio1.html",
  "anuncio2.html"
];

let closeHours = [
  '09', // Sunday
  '09',
  '09',
  '09',
  '09',
  '09',
  '09'
]
let current = 0;
let RefreshTime = 5000;

let CurTime = 0;
let CurDay = 0;
let CurMinute = 0;
let BackgroundColor = 1;

function init() {
  getCurrentTime();
  console.log('initializing...' + CurTime + ':' + CurMinute + ' ' + CurDay);
  refreshContent();
  setInterval(refreshContent, RefreshTime);
}


function refreshContent() {
  if (pages[current] == null ) {
    current=0;
    console.log('initializing pages array');
  }

  if (CurTime == closeHours[CurDay]-1) {
    console.log('CloseTime!!');
    console.log('Flashing!!');
    var intervalId = setInterval(flashScreen, 300);
    setTimeout(clearInterval(intervalId), 150000);
    RefreshTime = 3600000;
    pages = ["closing.html"];
  }
  console.log("Loaging page: " + pages[current]);
  fetch(pages[current])
  .then(data => data.text())
  .then(html => document.getElementById('content').innerHTML = html);
  console.log('Increasing current');
  current++;

}


function getCurrentTime() {
  now = new Date();
  CurDay = now.getDay();
  CurTime = now.getHours();
  CurMinute = now.getMinutes();

  if (CurTime < 10) CurTime = '0'+CurTime;
}

function flashScreen () {
  if (BackgroundColor === 1) {
      color = "#000";
      BackgroundColor = 2;
  } else {
      color = "#fff";
      BackgroundColor = 1;
  }

  document.body.style.background = color;

}
