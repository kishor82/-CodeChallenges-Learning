# Counting Valleys

## Problem Description

https://www.hackerrank.com/challenges/counting-valleys/problem

## My Solution

I approached this problem by iterating through each step in the given path and keeping track of whether the current position is inside a valley or not using a stack. If a step is a "D" (downward), I add it to the stack, and if it's an "U" (upward), I check if it cancels out the last step in the stack, and if it does, I pop it from the stack. If the stack becomes empty after popping, that means we have exited a valley, so I increment the valley count.


## Improved Solution

-

## Resources

-

## Notes

Before submitting your code, it is recommended to remove all console statements. Some tests may fail due to these statements, as console statements in JavaScript can slow down your program