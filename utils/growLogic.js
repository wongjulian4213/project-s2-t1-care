function throwError(message) {
  throw new Error(message);
}

export function plantGrowth(goal, mood, sleep) {
  typeof mood === "string" || throwError("mood should be of type string");
  typeof sleep === "string" || throwError("sleep should be of type string");

  mood || throwError("mood should not be empty");
  sleep || throwError("sleep should not be empty");
  sleep = parseInt(sleep);
  goal = parseInt(goal);

  var plantLevel = 0;
  switch (mood) {
    case "happy":
      plantLevel += 2;
      break;
    case "okay":
      plantLevel += 1;
      break;
    case "angry":
      plantLevel += 1;
      break;
    case "sad":
      plantLevel += 1;
      break;
  }

  if (sleep - goal / 2 < 0) {
    return plantLevel;
  } else if (sleep >= goal) {
    plantLevel += 4;
  } else {
    plantLevel += 2;
  }

  return plantLevel;
}
