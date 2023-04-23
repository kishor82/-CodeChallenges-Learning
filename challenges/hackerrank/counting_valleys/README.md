# Counting Valleys

## Problem Description

https://www.hackerrank.com/challenges/counting-valleys/problem

## My Solution

I approached this problem by iterating through each step in the given path and keeping track of whether the current position is inside a valley or not using a stack. If a step is a "D" (downward), I add it to the stack, and if it's an "U" (upward), I check if it cancels out the last step in the stack, and if it does, I pop it from the stack. If the stack becomes empty after popping, that means we have exited a valley, so I increment the valley count.

The time complexity of this solution is O(n) because it iterates through the path string of length n once.

The space complexity of this solution is O(n) because of the stack used to keep track of the steps.

## Improved Solution

In this version, we don't use a stack to keep track of the current level, we simply use a single variable level which represents the current level. We iterate through each step in the path, and if the step is "U", we increment level, and if level becomes 0, we know that we have just finished a valley, so we increment valleyCount. If the step is "D", we decrement level.

This version has a time complexity of O(n) and a space complexity of O(1). It is also much simpler and easier to understand than the previous version.

## Resources

-

## Notes

Before submitting your code, it is recommended to remove all console statements. Some tests may fail due to these statements, as console statements in JavaScript can slow down your program