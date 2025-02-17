function cashOut(money) {
  if (typeof money !== "number" || money < 0) {
    return "Invalid";
  }
  let cashOutCharge = (money * 1.75) / 100;
  return cashOutCharge;
}

function validEmail(email) {
  if (typeof email !== "string") {
    return "Invalid";
  }
  const invalidChars = [".", "-", "_", "+", "@"];
  if (invalidChars.includes(email[0]) || email.includes(" ")) {
    return false;
  }
  if (
    email.includes("@") &&
    email.indexOf("@") !== 0 &&
    email.endsWith(".com")
  ) {
    return true;
  }
  return false;
}

function electionResult(votes) {
  if (!Array.isArray(votes)) {
    return "Invalid";
  }
  let mangoVoteCount = 0;
  let bananaVoteCount = 0;
  for (let vote of votes) {
    if (vote === "mango") {
      mangoVoteCount++;
    } else if (vote === "banana") {
      bananaVoteCount++;
    }
  }
  if (mangoVoteCount > bananaVoteCount) {
    return "Mango";
  } else if (bananaVoteCount > mangoVoteCount) {
    return "Banana";
  } else {
    return "Draw";
  }
}

function isBestFriend(f1, f2) {
  if (typeof f1 !== "object" || typeof f2 !== "object") {
    return "Invalid";
  }
  if (f1.bestFriend === f2.roll && f2.bestFriend === f1.roll) {
    return true;
  }
  return false;
}

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
