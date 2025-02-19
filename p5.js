function calculateWatchTime(times) {
  let totalSecond = 0;
  for (let time of times) {
    if (typeof time === "number" || !Array.isArray(times)) {
      totalSecond += time;
    } else {
      return "Invalid";
    }
  }
  let h = parseInt(totalSecond / 3600);
  let min = parseInt((totalSecond - 3600 * h) / 60);
  let sec = parseInt(totalSecond - 3600 * h - min * 60);

  const output = {
    hour: h,
    minute: min,
    second: sec,
  };
  return output;
}
console.log(calculateWatchTime([100, 99, 119, 300]));
console.log(calculateWatchTime([1000, 2000, 725]));
console.log(calculateWatchTime([100, 3800]));
console.log(calculateWatchTime([]));
console.log(calculateWatchTime([-100]));
console.log(calculateWatchTime([100, 3800, "90"]));
