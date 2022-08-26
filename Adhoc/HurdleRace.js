//Solution to: https://www.hackerrank.com/challenges/the-hurdle-race/problem

function hurdleRace(k, height) {
    height.sort((a, b) => b - a);
    const maxHeight = height[0];
    
    return k <= maxHeight ? maxHeight - k: 0;

}