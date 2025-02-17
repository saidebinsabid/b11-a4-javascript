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
console.log(electionResult(["mango", "banana", "Na-Vote", "mango"]));
console.log(electionResult([]));
console.log(electionResult(["mango", "banana", "jaker party", "no"]));
console.log(electionResult(["mango"]));
console.log(electionResult(["banana", "banana", "age e valo chilam", "no"]));
console.log(electionResult({ result: "mango , banana ,  mango" }));
console.log(electionResult("mango , banana"));
console.log(electionResult(["mango", "BananA", "na vote", "na vote"]));
