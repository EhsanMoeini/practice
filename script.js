let second = 0;
let minutes = 0;
let hour = 0;

let time;
while (time != `-1`) {
  if (time != `-1` && time) {
    let timeArray = time.split(`:`);
    let timeArrayLength = timeArray.length;
    if (timeArrayLength > 3) {
      alert(`unvalid time`);
    } else {
      second += +timeArray[timeArrayLength - 1];
      if (timeArrayLength >= 2) {
        minutes += +timeArray[timeArrayLength - 2];
      }
      if (timeArrayLength >= 3) {
        hour += +timeArray[timeArrayLength - 3];
      }
      if (second >= 60) {
        second -= 60;
        minutes++;
      }
      if (minutes >= 60) {
        minutes -= 60;
        hour++;
      }
    }
  }
  time = prompt(
    `give me some time to put them together like 2:36:24
  if you want to stop enter -1`,
    "2:36:24"
  );
}
console.log(` the some of time is ${hour} : ${minutes} : ${second}`);