//Solution to: https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem

function jumpingOnClouds(c) {
    // Write your code here
    let minJumps = 0;
    let i = 0;5

    while(i < c.length) {
        if (i < c.length - 2) {
            if (c[i + 2] === 0) {
                i += 2;
            }
            else {
                i++;
            }   
        } else {
            i++;
        }
        minJumps++;
    }
    
    return minJumps - 1;
}