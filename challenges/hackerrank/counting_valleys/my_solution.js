function countingValleys(steps, path) {
  // Write your code here
  const mapStepValue = {
    D: -1,
    U: 1,
  };

  let isInsideValley = false;
  let vallyCount = 0;
  const stack = [];
  for (let i = 0; i < steps; i++) {
    console.log(`START-${i}`, { current: path[i], stack, isInsideValley });
    if (path[i] === "D") {
      if (
        stack.length &&
        mapStepValue[stack[stack.length - 1]] + mapStepValue["D"] === 0
      ) {
        stack.pop();
      } else {
        stack.push(path[i]);
        isInsideValley = true;
      }
    } else {
      if (
        stack.length &&
        mapStepValue[stack[stack.length - 1]] + mapStepValue["U"] === 0 &&
        isInsideValley
      ) {
        stack.pop();
        console.log("After poping", stack.length);
        if (!stack.length) {
          vallyCount = vallyCount + 1;
          isInsideValley = false;
        }
      } else {
        stack.push(path[i]);
      }
    }
    console.log(`END-${i}`, { current: path[i], stack, isInsideValley });
  }
  console.log({ stack });
  return vallyCount;
}

console.log(countingValleys(8, "DDUUUUDD"));
